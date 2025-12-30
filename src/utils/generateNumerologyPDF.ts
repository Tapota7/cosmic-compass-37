import { jsPDF } from 'jspdf';
import { getNumerologyNumber } from '@/data/numerology';

interface NumerologyResults {
  name: string;
  birthDate: string;
  lifePath: number;
  destiny: number;
  soul: number;
  personality: number;
  personalYear: number;
}

export const generateNumerologyPDF = (results: NumerologyResults) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(88, 28, 135); // Purple
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('Carta Numerológica', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(14);
  doc.text(results.name, pageWidth / 2, 32, { align: 'center' });
  
  // Birth date
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.text(`Fecha de nacimiento: ${results.birthDate}`, pageWidth / 2, 50, { align: 'center' });
  
  let yPos = 65;
  
  const addNumberSection = (num: number, title: string, y: number): number => {
    const data = getNumerologyNumber(num);
    if (!data) return y;
    
    // Check if we need a new page
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    
    // Number circle
    doc.setFillColor(139, 92, 246);
    doc.circle(25, y + 5, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text(String(num), 25, y + 8, { align: 'center' });
    
    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(`${title}: ${data.name}`, 40, y + 5);
    
    // Keywords
    doc.setTextColor(139, 92, 246);
    doc.setFontSize(9);
    doc.text(data.keywords.join(' • '), 40, y + 12);
    
    // Meaning
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    const meaningLines = doc.splitTextToSize(data.meaning, pageWidth - 50);
    const maxLines = Math.min(meaningLines.length, 4);
    doc.text(meaningLines.slice(0, maxLines), 20, y + 22);
    
    // Shadow
    doc.setTextColor(180, 60, 60);
    doc.setFontSize(9);
    const shadowText = `Sombra: ${data.shadow.substring(0, 150)}...`;
    const shadowLines = doc.splitTextToSize(shadowText, pageWidth - 50);
    doc.text(shadowLines.slice(0, 2), 20, y + 22 + (maxLines * 4));
    
    return y + 45 + (maxLines * 4);
  };
  
  yPos = addNumberSection(results.lifePath, 'Número de Vida', yPos);
  yPos = addNumberSection(results.destiny, 'Número de Destino', yPos);
  yPos = addNumberSection(results.soul, 'Número del Alma', yPos);
  yPos = addNumberSection(results.personality, 'Número de Personalidad', yPos);
  yPos = addNumberSection(results.personalYear, 'Año Personal', yPos);
  
  // Footer
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('Generado en AstroGuía • astroguia.com', pageWidth / 2, 290, { align: 'center' });
  
  // Save
  doc.save(`numerologia-${results.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};
