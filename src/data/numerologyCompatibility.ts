export interface CompatibilityResult {
  score: number;
  level: 'excellent' | 'good' | 'moderate' | 'challenging';
  summary: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

// Compatibility matrix for life path numbers (1-9 and master numbers)
const compatibilityMatrix: { [key: string]: { score: number; type: string } } = {
  // 1 combinations
  '1-1': { score: 75, type: 'challenging' },
  '1-2': { score: 70, type: 'moderate' },
  '1-3': { score: 90, type: 'excellent' },
  '1-4': { score: 60, type: 'challenging' },
  '1-5': { score: 88, type: 'excellent' },
  '1-6': { score: 72, type: 'moderate' },
  '1-7': { score: 65, type: 'moderate' },
  '1-8': { score: 85, type: 'good' },
  '1-9': { score: 80, type: 'good' },
  '1-11': { score: 75, type: 'moderate' },
  '1-22': { score: 78, type: 'good' },
  '1-33': { score: 70, type: 'moderate' },
  
  // 2 combinations
  '2-2': { score: 85, type: 'good' },
  '2-3': { score: 82, type: 'good' },
  '2-4': { score: 88, type: 'excellent' },
  '2-5': { score: 55, type: 'challenging' },
  '2-6': { score: 92, type: 'excellent' },
  '2-7': { score: 78, type: 'good' },
  '2-8': { score: 80, type: 'good' },
  '2-9': { score: 75, type: 'moderate' },
  '2-11': { score: 90, type: 'excellent' },
  '2-22': { score: 85, type: 'good' },
  '2-33': { score: 88, type: 'excellent' },
  
  // 3 combinations
  '3-3': { score: 88, type: 'good' },
  '3-4': { score: 55, type: 'challenging' },
  '3-5': { score: 92, type: 'excellent' },
  '3-6': { score: 90, type: 'excellent' },
  '3-7': { score: 68, type: 'moderate' },
  '3-8': { score: 70, type: 'moderate' },
  '3-9': { score: 85, type: 'good' },
  '3-11': { score: 88, type: 'excellent' },
  '3-22': { score: 72, type: 'moderate' },
  '3-33': { score: 90, type: 'excellent' },
  
  // 4 combinations
  '4-4': { score: 82, type: 'good' },
  '4-5': { score: 50, type: 'challenging' },
  '4-6': { score: 85, type: 'good' },
  '4-7': { score: 78, type: 'good' },
  '4-8': { score: 90, type: 'excellent' },
  '4-9': { score: 58, type: 'challenging' },
  '4-11': { score: 65, type: 'moderate' },
  '4-22': { score: 95, type: 'excellent' },
  '4-33': { score: 75, type: 'moderate' },
  
  // 5 combinations
  '5-5': { score: 78, type: 'moderate' },
  '5-6': { score: 60, type: 'challenging' },
  '5-7': { score: 82, type: 'good' },
  '5-8': { score: 70, type: 'moderate' },
  '5-9': { score: 85, type: 'good' },
  '5-11': { score: 75, type: 'moderate' },
  '5-22': { score: 60, type: 'challenging' },
  '5-33': { score: 72, type: 'moderate' },
  
  // 6 combinations
  '6-6': { score: 90, type: 'excellent' },
  '6-7': { score: 55, type: 'challenging' },
  '6-8': { score: 78, type: 'good' },
  '6-9': { score: 92, type: 'excellent' },
  '6-11': { score: 85, type: 'good' },
  '6-22': { score: 88, type: 'excellent' },
  '6-33': { score: 95, type: 'excellent' },
  
  // 7 combinations
  '7-7': { score: 75, type: 'moderate' },
  '7-8': { score: 58, type: 'challenging' },
  '7-9': { score: 72, type: 'moderate' },
  '7-11': { score: 88, type: 'excellent' },
  '7-22': { score: 75, type: 'moderate' },
  '7-33': { score: 80, type: 'good' },
  
  // 8 combinations
  '8-8': { score: 82, type: 'good' },
  '8-9': { score: 60, type: 'challenging' },
  '8-11': { score: 70, type: 'moderate' },
  '8-22': { score: 90, type: 'excellent' },
  '8-33': { score: 75, type: 'moderate' },
  
  // 9 combinations
  '9-9': { score: 88, type: 'good' },
  '9-11': { score: 82, type: 'good' },
  '9-22': { score: 78, type: 'good' },
  '9-33': { score: 92, type: 'excellent' },
  
  // Master number combinations
  '11-11': { score: 85, type: 'good' },
  '11-22': { score: 88, type: 'excellent' },
  '11-33': { score: 90, type: 'excellent' },
  '22-22': { score: 82, type: 'good' },
  '22-33': { score: 88, type: 'excellent' },
  '33-33': { score: 95, type: 'excellent' },
};

const numberDescriptions: { [key: number]: { essence: string; needs: string } } = {
  1: { essence: 'líder independiente', needs: 'autonomía y reconocimiento' },
  2: { essence: 'mediador sensible', needs: 'armonía y compañía' },
  3: { essence: 'comunicador creativo', needs: 'expresión y alegría' },
  4: { essence: 'constructor estable', needs: 'seguridad y orden' },
  5: { essence: 'aventurero libre', needs: 'libertad y cambio' },
  6: { essence: 'protector amoroso', needs: 'familia y responsabilidad' },
  7: { essence: 'buscador espiritual', needs: 'soledad y conocimiento' },
  8: { essence: 'manifestador poderoso', needs: 'logros y abundancia' },
  9: { essence: 'humanitario sabio', needs: 'servicio y trascendencia' },
  11: { essence: 'visionario inspirador', needs: 'inspirar y elevar' },
  22: { essence: 'maestro constructor', needs: 'crear legados' },
  33: { essence: 'maestro sanador', needs: 'amar incondicionalmente' },
};

const getCompatibilityData = (num1: number, num2: number) => {
  const key = num1 <= num2 ? `${num1}-${num2}` : `${num2}-${num1}`;
  return compatibilityMatrix[key] || { score: 65, type: 'moderate' };
};

export const calculateNumerologyCompatibility = (
  lifePath1: number,
  lifePath2: number,
  name1: string,
  name2: string
): CompatibilityResult => {
  const data = getCompatibilityData(lifePath1, lifePath2);
  const desc1 = numberDescriptions[lifePath1] || numberDescriptions[1];
  const desc2 = numberDescriptions[lifePath2] || numberDescriptions[1];
  
  const level = data.score >= 85 ? 'excellent' 
    : data.score >= 70 ? 'good' 
    : data.score >= 55 ? 'moderate' 
    : 'challenging';
  
  // Generate dynamic content
  let summary = '';
  let strengths: string[] = [];
  let challenges: string[] = [];
  let advice = '';
  
  if (lifePath1 === lifePath2) {
    summary = `Ambos comparten el número de vida ${lifePath1}, lo que crea una conexión profunda basada en valores similares. Se entienden intuitivamente, aunque pueden amplificar tanto lo positivo como los desafíos.`;
    strengths = [
      'Comprensión mutua instantánea',
      'Valores y metas de vida similares',
      'Apoyo natural en el camino de vida del otro'
    ];
    challenges = [
      'Pueden reflejar las sombras del otro',
      'Posible competencia en las mismas áreas',
      'Falta de equilibrio por energías similares'
    ];
    advice = `Como dos ${desc1.essence}s, aprovechen su comprensión mutua pero busquen desarrollar cualidades complementarias para equilibrar la relación.`;
  } else if (level === 'excellent') {
    summary = `La combinación entre un ${desc1.essence} (${lifePath1}) y un ${desc2.essence} (${lifePath2}) es altamente armoniosa. Sus energías se complementan naturalmente.`;
    strengths = [
      `El ${lifePath1} aporta ${desc1.essence.split(' ')[0]} mientras el ${lifePath2} ofrece ${desc2.essence.split(' ')[1]}`,
      'Balance natural de energías opuestas pero compatibles',
      'Crecimiento mutuo a través de las diferencias'
    ];
    challenges = [
      'Deben respetar las diferentes necesidades de cada uno',
      `El ${lifePath1} necesita ${desc1.needs}, el ${lifePath2} necesita ${desc2.needs}`
    ];
    advice = `Esta es una conexión con gran potencial. El secreto está en valorar lo que cada uno aporta sin intentar cambiar al otro.`;
  } else if (level === 'good') {
    summary = `La relación entre ${name1} (${lifePath1}) y ${name2} (${lifePath2}) tiene un buen potencial. Con comunicación y respeto, pueden construir algo sólido.`;
    strengths = [
      'Compatibilidad básica de valores',
      'Pueden aprender mucho el uno del otro',
      'Suficientes similitudes para conectar, suficientes diferencias para crecer'
    ];
    challenges = [
      'Necesitan trabajar en la comunicación de necesidades',
      'Pueden surgir fricciones en momentos de estrés',
      'Deben desarrollar paciencia con las diferencias'
    ];
    advice = `Enfóquense en lo que los une y vean las diferencias como oportunidades de aprendizaje, no como obstáculos.`;
  } else if (level === 'moderate') {
    summary = `La conexión entre un ${desc1.essence} y un ${desc2.essence} requiere esfuerzo consciente. No es imposible, pero necesita trabajo de ambas partes.`;
    strengths = [
      'Pueden expandir la perspectiva del otro',
      'Las diferencias promueven crecimiento personal',
      'Si superan los desafíos, la relación será muy fuerte'
    ];
    challenges = [
      'Diferentes ritmos y prioridades de vida',
      'Posibles malentendidos frecuentes',
      `El ${lifePath1} busca ${desc1.needs} mientras el ${lifePath2} busca ${desc2.needs}`
    ];
    advice = `Esta relación es un camino de aprendizaje. Desarrollen la comunicación y la paciencia. Lo que parece un obstáculo hoy puede ser su mayor fortaleza mañana.`;
  } else {
    summary = `La combinación ${lifePath1}-${lifePath2} presenta desafíos significativos. Sin embargo, las relaciones más transformadoras a menudo vienen de las conexiones menos "fáciles".`;
    strengths = [
      'Potencial de transformación profunda',
      'Pueden equilibrar extremos en el otro',
      'Si funciona, será una relación muy evolucionada'
    ];
    challenges = [
      'Diferencias fundamentales en cómo ven la vida',
      'Pueden sentirse incomprendidos frecuentemente',
      'Requiere mucha madurez emocional de ambos'
    ];
    advice = `No descarten esta conexión automáticamente. Pregúntense: ¿están dispuestos a hacer el trabajo interior que esta relación les pide? Si la respuesta es sí, pueden lograr algo extraordinario.`;
  }
  
  return {
    score: data.score,
    level,
    summary,
    strengths,
    challenges,
    advice
  };
};

export const getLevelInfo = (level: CompatibilityResult['level']) => {
  switch (level) {
    case 'excellent': return { label: 'Excelente', emoji: '💫', color: 'text-green-400' };
    case 'good': return { label: 'Buena', emoji: '✨', color: 'text-emerald-400' };
    case 'moderate': return { label: 'Moderada', emoji: '🌟', color: 'text-yellow-400' };
    case 'challenging': return { label: 'Desafiante', emoji: '🔥', color: 'text-orange-400' };
  }
};
