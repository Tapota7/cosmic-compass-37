import { jsPDF } from 'jspdf';
import { getLevelInfo } from '@/data/compatibility';

interface AstroCompatibilityResult {
  sign1: { name: string; symbol: string };
  sign2: { name: string; symbol: string };
  score: number;
  level: string;
  summary: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

export const generateAstroCompatibilityPDF = (result: AstroCompatibilityResult) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const levelInfo = getLevelInfo(result.level);
  
  // Header with gradient effect simulation
  doc.setFillColor(88, 28, 135);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  // Secondary gradient layer
  doc.setFillColor(139, 92, 246);
  doc.rect(0, 0, pageWidth, 25, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(26);
  doc.text('Compatibilidad Astrologica', pageWidth / 2, 22, { align: 'center' });
  
  doc.setFontSize(16);
  doc.text(`${result.sign1.symbol} ${result.sign1.name}  +  ${result.sign2.symbol} ${result.sign2.name}`, pageWidth / 2, 40, { align: 'center' });
  
  // Score section
  let yPos = 70;
  
  // Score circle simulation
  doc.setDrawColor(139, 92, 246);
  doc.setLineWidth(3);
  doc.circle(pageWidth / 2, yPos, 25);
  
  doc.setTextColor(139, 92, 246);
  doc.setFontSize(36);
  doc.text(`${result.score}%`, pageWidth / 2, yPos + 5, { align: 'center' });
  
  yPos += 40;
  
  // Level badge
  doc.setFillColor(245, 240, 255);
  doc.roundedRect(pageWidth / 2 - 40, yPos - 8, 80, 16, 3, 3, 'F');
  
  doc.setTextColor(88, 28, 135);
  doc.setFontSize(12);
  doc.text(`${levelInfo.emoji} ${levelInfo.label}`, pageWidth / 2, yPos + 2, { align: 'center' });
  
  yPos += 25;
  
  // Summary
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  const summaryLines = doc.splitTextToSize(result.summary, pageWidth - 40);
  doc.text(summaryLines, 20, yPos);
  yPos += summaryLines.length * 6 + 15;
  
  // Strengths section
  if (result.strengths.length > 0) {
    doc.setFillColor(34, 139, 34);
    doc.rect(15, yPos - 5, 4, 20, 'F');
    
    doc.setTextColor(34, 139, 34);
    doc.setFontSize(14);
    doc.text('Fortalezas de la Relacion', 25, yPos + 5);
    yPos += 15;
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    result.strengths.forEach((strength) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      const lines = doc.splitTextToSize(`• ${strength}`, pageWidth - 50);
      doc.text(lines, 25, yPos);
      yPos += lines.length * 5 + 3;
    });
    yPos += 10;
  }
  
  // Challenges section
  if (result.challenges.length > 0) {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFillColor(210, 105, 30);
    doc.rect(15, yPos - 5, 4, 20, 'F');
    
    doc.setTextColor(210, 105, 30);
    doc.setFontSize(14);
    doc.text('Desafios a Trabajar', 25, yPos + 5);
    yPos += 15;
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    result.challenges.forEach((challenge) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      const lines = doc.splitTextToSize(`• ${challenge}`, pageWidth - 50);
      doc.text(lines, 25, yPos);
      yPos += lines.length * 5 + 3;
    });
    yPos += 10;
  }
  
  // Advice section
  if (yPos > 210) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFillColor(245, 240, 255);
  doc.roundedRect(15, yPos - 5, pageWidth - 30, 45, 4, 4, 'F');
  
  doc.setFillColor(139, 92, 246);
  doc.rect(15, yPos - 5, 4, 45, 'F');
  
  doc.setTextColor(88, 28, 135);
  doc.setFontSize(12);
  doc.text('Consejo para esta Union', 25, yPos + 8);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  const adviceLines = doc.splitTextToSize(result.advice, pageWidth - 55);
  doc.text(adviceLines.slice(0, 4), 25, yPos + 20);
  
  // Footer
  const footerY = doc.internal.pageSize.getHeight() - 15;
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('Generado en Sabiduria Cuantica', pageWidth / 2, footerY, { align: 'center' });
  doc.text(new Date().toLocaleDateString('es-ES'), pageWidth / 2, footerY + 5, { align: 'center' });
  
  // Save the PDF
  const fileName = `compatibilidad-${result.sign1.name.toLowerCase()}-${result.sign2.name.toLowerCase()}.pdf`.replace(/\s+/g, '-');
  doc.save(fileName);
};
