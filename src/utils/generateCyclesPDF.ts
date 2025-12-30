import { jsPDF } from 'jspdf';
import { CycleInfo } from '@/data/personalCycles';

interface CycleData {
  number: number;
  period: string;
  info: CycleInfo;
}

interface CyclesResults {
  birthDate: string;
  personalYear: CycleData;
  personalMonth: CycleData;
  personalDay: CycleData;
}

export const generateCyclesPDF = (results: CyclesResults) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(88, 28, 135);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('Ciclos Personales', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text(`Nacimiento: ${results.birthDate}`, pageWidth / 2, 32, { align: 'center' });
  
  let yPos = 55;
  
  const addCycleSection = (
    title: string,
    emoji: string,
    cycle: CycleData,
    color: { r: number; g: number; b: number }
  ) => {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }
    
    // Circle with number
    doc.setFillColor(color.r, color.g, color.b);
    doc.circle(25, yPos + 8, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text(String(cycle.number), 25, yPos + 12, { align: 'center' });
    
    // Title and period
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(`${emoji} ${title}`, 42, yPos + 5);
    
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.text(cycle.period, 42, yPos + 12);
    
    yPos += 22;
    
    // Name and theme
    doc.setTextColor(139, 92, 246);
    doc.setFontSize(12);
    doc.text(cycle.info.name, 20, yPos);
    
    yPos += 6;
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.text(cycle.info.theme, 20, yPos);
    
    yPos += 8;
    
    // Energy
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    const energyLines = doc.splitTextToSize(cycle.info.energy, pageWidth - 40);
    doc.text(energyLines.slice(0, 3), 20, yPos);
    yPos += Math.min(energyLines.length, 3) * 5 + 5;
    
    // Advice box
    doc.setFillColor(245, 240, 255);
    doc.roundedRect(18, yPos - 2, pageWidth - 36, 18, 2, 2, 'F');
    
    doc.setTextColor(88, 28, 135);
    doc.setFontSize(9);
    doc.text('Consejo:', 22, yPos + 5);
    
    doc.setTextColor(80, 80, 80);
    const adviceLines = doc.splitTextToSize(cycle.info.advice, pageWidth - 60);
    doc.text(adviceLines[0], 45, yPos + 5);
    if (adviceLines[1]) {
      doc.text(adviceLines[1].substring(0, 60) + '...', 22, yPos + 11);
    }
    
    yPos += 25;
    
    // Activities
    doc.setTextColor(34, 139, 34);
    doc.setFontSize(9);
    doc.text('Actividades: ', 20, yPos);
    doc.setTextColor(80, 80, 80);
    doc.text(cycle.info.activities.slice(0, 4).join(' • '), 50, yPos);
    
    yPos += 20;
  };
  
  addCycleSection('Año Personal', '☀️', results.personalYear, { r: 234, g: 179, b: 8 });
  addCycleSection('Mes Personal', '🌙', results.personalMonth, { r: 59, g: 130, b: 246 });
  addCycleSection('Día Personal', '✨', results.personalDay, { r: 168, g: 85, b: 247 });
  
  // How cycles work section
  if (yPos > 200) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFillColor(240, 240, 245);
  doc.roundedRect(15, yPos, pageWidth - 30, 50, 3, 3, 'F');
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text('¿Cómo funcionan los ciclos?', 20, yPos + 10);
  
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(9);
  doc.text('• Año Personal: Define el tema principal de tu año.', 20, yPos + 22);
  doc.text('• Mes Personal: Refina la energía del año con un enfoque mensual.', 20, yPos + 32);
  doc.text('• Día Personal: La energía más inmediata para planificar tu día.', 20, yPos + 42);
  
  // Footer
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('Generado en Sabiduría Cuántica', pageWidth / 2, 290, { align: 'center' });
  
  // Save
  doc.save(`ciclos-personales.pdf`);
};
