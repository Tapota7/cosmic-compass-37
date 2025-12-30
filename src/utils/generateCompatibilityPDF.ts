import { jsPDF } from 'jspdf';
import { getLevelInfo } from '@/data/numerologyCompatibility';

interface CompatibilityResult {
  person1: { name: string; lifePath: number };
  person2: { name: string; lifePath: number };
  score: number;
  level: 'excellent' | 'good' | 'moderate' | 'challenging';
  summary: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

export const generateCompatibilityPDF = (result: CompatibilityResult) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const levelInfo = getLevelInfo(result.level);
  
  // Header
  doc.setFillColor(88, 28, 135);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('Compatibilidad Numerológica', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(14);
  doc.text(`${result.person1.name} & ${result.person2.name}`, pageWidth / 2, 35, { align: 'center' });
  
  // Score section
  let yPos = 60;
  
  // Numbers
  doc.setTextColor(139, 92, 246);
  doc.setFontSize(12);
  doc.text(`Número de Vida: ${result.person1.lifePath}`, 40, yPos);
  doc.text(`Número de Vida: ${result.person2.lifePath}`, pageWidth - 40, yPos, { align: 'right' });
  
  yPos += 20;
  
  // Score
  doc.setTextColor(88, 28, 135);
  doc.setFontSize(48);
  doc.text(`${result.score}%`, pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 10;
  doc.setFontSize(14);
  doc.setTextColor(100, 100, 100);
  doc.text(`Compatibilidad ${levelInfo.label}`, pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 20;
  
  // Summary
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  const summaryLines = doc.splitTextToSize(result.summary, pageWidth - 40);
  doc.text(summaryLines, 20, yPos);
  yPos += summaryLines.length * 6 + 15;
  
  // Strengths
  if (result.strengths.length > 0) {
    doc.setTextColor(34, 139, 34);
    doc.setFontSize(14);
    doc.text('Fortalezas de la Conexión', 20, yPos);
    yPos += 8;
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    result.strengths.forEach((strength) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      const lines = doc.splitTextToSize(`✓ ${strength}`, pageWidth - 40);
      doc.text(lines, 20, yPos);
      yPos += lines.length * 5 + 3;
    });
    yPos += 10;
  }
  
  // Challenges
  if (result.challenges.length > 0) {
    if (yPos > 230) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setTextColor(210, 105, 30);
    doc.setFontSize(14);
    doc.text('Desafíos a Trabajar', 20, yPos);
    yPos += 8;
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    result.challenges.forEach((challenge) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      const lines = doc.splitTextToSize(`! ${challenge}`, pageWidth - 40);
      doc.text(lines, 20, yPos);
      yPos += lines.length * 5 + 3;
    });
    yPos += 10;
  }
  
  // Advice
  if (yPos > 220) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFillColor(245, 240, 255);
  doc.roundedRect(15, yPos - 5, pageWidth - 30, 40, 3, 3, 'F');
  
  doc.setTextColor(88, 28, 135);
  doc.setFontSize(12);
  doc.text('Consejo para esta Unión', 20, yPos + 5);
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  const adviceLines = doc.splitTextToSize(result.advice, pageWidth - 50);
  doc.text(adviceLines.slice(0, 4), 20, yPos + 15);
  
  // Footer
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('Generado en Sabiduría Cuántica', pageWidth / 2, 290, { align: 'center' });
  
  // Save
  const fileName = `compatibilidad-${result.person1.name.toLowerCase()}-${result.person2.name.toLowerCase()}.pdf`.replace(/\s+/g, '-');
  doc.save(fileName);
};
