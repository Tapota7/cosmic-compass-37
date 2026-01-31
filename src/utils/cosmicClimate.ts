// Cosmic Climate Calculation Utility
// Combines numerology (birth date + current date) with simulated lunar transit

interface DayFocus {
  number: number;
  name: string;
  description: string;
  icon: string;
}

interface MoonVibe {
  sign: string;
  symbol: string;
  element: string;
  vibe: string;
  icon: string;
}

export interface CosmicClimate {
  dayFocus: DayFocus;
  moonVibe: MoonVibe;
  combinedMessage: string;
  combinedVibration: string;
  energyLevel: 'alta' | 'media' | 'baja';
}

const DAY_FOCUS_MAP: Record<number, Omit<DayFocus, 'number'>> = {
  1: { name: 'Día de Inicios', description: 'Perfecto para comenzar proyectos nuevos y tomar la iniciativa', icon: '🚀' },
  2: { name: 'Día de Conexión', description: 'Ideal para relaciones, cooperación y diplomacia', icon: '🤝' },
  3: { name: 'Día de Comunicación', description: 'Expresa tu creatividad y comparte tus ideas', icon: '💬' },
  4: { name: 'Día de Estructura', description: 'Enfócate en organizar, planificar y construir bases sólidas', icon: '🏗️' },
  5: { name: 'Día de Cambio', description: 'Abraza lo nuevo, viaja y experimenta la libertad', icon: '🦋' },
  6: { name: 'Día de Amor', description: 'Cuida a los tuyos, nutre relaciones y crea armonía', icon: '💖' },
  7: { name: 'Día de Reflexión', description: 'Medita, analiza y conecta con tu sabiduría interior', icon: '🔮' },
  8: { name: 'Día de Poder', description: 'Toma decisiones importantes y manifiesta abundancia', icon: '👑' },
  9: { name: 'Día de Culminación', description: 'Cierra ciclos, perdona y prepárate para nuevos comienzos', icon: '🌟' },
};

const ZODIAC_SIGNS = [
  { sign: 'Aries', symbol: '♈', element: 'fuego' },
  { sign: 'Tauro', symbol: '♉', element: 'tierra' },
  { sign: 'Géminis', symbol: '♊', element: 'aire' },
  { sign: 'Cáncer', symbol: '♋', element: 'agua' },
  { sign: 'Leo', symbol: '♌', element: 'fuego' },
  { sign: 'Virgo', symbol: '♍', element: 'tierra' },
  { sign: 'Libra', symbol: '♎', element: 'aire' },
  { sign: 'Escorpio', symbol: '♏', element: 'agua' },
  { sign: 'Sagitario', symbol: '♐', element: 'fuego' },
  { sign: 'Capricornio', symbol: '♑', element: 'tierra' },
  { sign: 'Acuario', symbol: '♒', element: 'aire' },
  { sign: 'Piscis', symbol: '♓', element: 'agua' },
];

const ELEMENT_VIBES: Record<string, { vibe: string; icon: string }> = {
  fuego: { vibe: 'Acción & Pasión', icon: '🔥' },
  tierra: { vibe: 'Estructura & Estabilidad', icon: '🌍' },
  aire: { vibe: 'Ideas & Comunicación', icon: '💨' },
  agua: { vibe: 'Intuición & Emociones', icon: '🌊' },
};

// Reduce any number to a single digit (1-9)
function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num || 1; // Fallback to 1 if 0
}

// Get day of year (1-365/366)
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Calculate simulated moon sign based on day of year
function getMoonSign(date: Date): MoonVibe {
  const dayOfYear = getDayOfYear(date);
  // Moon cycles through all 12 signs in ~28 days, so each sign lasts ~2.33 days
  const moonCyclePosition = dayOfYear % 28;
  const signIndex = Math.floor(moonCyclePosition / 2.33) % 12;
  
  const zodiacSign = ZODIAC_SIGNS[signIndex];
  const elementVibe = ELEMENT_VIBES[zodiacSign.element];
  
  return {
    sign: zodiacSign.sign,
    symbol: zodiacSign.symbol,
    element: zodiacSign.element,
    vibe: elementVibe.vibe,
    icon: elementVibe.icon,
  };
}

// Calculate day focus from numerology
function calculateDayFocus(birthDate: Date | null, currentDate: Date): DayFocus {
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  
  let sum = currentDay + currentMonth + currentYear;
  
  if (birthDate) {
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth() + 1;
    sum += birthDay + birthMonth;
  }
  
  const reducedNumber = reduceToSingleDigit(sum);
  const focusData = DAY_FOCUS_MAP[reducedNumber];
  
  return {
    number: reducedNumber,
    ...focusData,
  };
}

// Calculate energy level based on combination
function calculateEnergyLevel(dayNumber: number, element: string): 'alta' | 'media' | 'baja' {
  const highEnergyNumbers = [1, 3, 5, 8];
  const highEnergyElements = ['fuego', 'aire'];
  
  const numberHigh = highEnergyNumbers.includes(dayNumber);
  const elementHigh = highEnergyElements.includes(element);
  
  if (numberHigh && elementHigh) return 'alta';
  if (numberHigh || elementHigh) return 'media';
  return 'baja';
}

// Generate combined message
function generateCombinedMessage(dayFocus: DayFocus, moonVibe: MoonVibe): string {
  const messages: Record<string, Record<string, string>> = {
    fuego: {
      1: 'Hoy el universo te impulsa a tomar la iniciativa con pasión. La energía de fuego amplifica tu poder de comenzar.',
      2: 'Aunque el fuego te pide acción, hoy encuentra el equilibrio en las conexiones. Tu carisma brilla.',
      3: 'La creatividad está en llamas. Exprésate con audacia y deja que tu voz resuene.',
      4: 'Canaliza la energía ardiente en estructuras sólidas. Construye con determinación.',
      5: 'Aventura y libertad te llaman. La luna de fuego potencia tu sed de cambio.',
      6: 'El amor arde intensamente hoy. Cuida a los tuyos con pasión y devoción.',
      7: 'Reflexión profunda iluminada por el fuego interior. Medita con intensidad.',
      8: 'Poder y manifestación en su máxima expresión. Toma decisiones audaces.',
      9: 'Cierra ciclos con la fuerza transformadora del fuego. Renace de las cenizas.',
    },
    tierra: {
      1: 'Nuevos comienzos con bases sólidas. La tierra te ancla mientras inicias.',
      2: 'Conexiones estables y duraderas. Construye relaciones con paciencia.',
      3: 'Creatividad práctica y tangible. Da forma material a tus ideas.',
      4: 'Estructura perfecta. El universo apoya tu organización y planificación.',
      5: 'Cambios graduales y sostenibles. Transforma con los pies en la tierra.',
      6: 'Amor que nutre y sostiene. Crea un refugio seguro para los tuyos.',
      7: 'Sabiduría ancestral emerge. Conecta con la tierra para encontrar respuestas.',
      8: 'Abundancia material y poder tangible. Manifiesta riqueza concreta.',
      9: 'Culminación de ciclos con gratitud. Cosecha lo que sembraste.',
    },
    aire: {
      1: 'Ideas brillantes para nuevos comienzos. Tu mente está afilada y lista.',
      2: 'Comunicación fluida en relaciones. Las palabras construyen puentes.',
      3: 'Creatividad intelectual en su máximo. Las musas susurran inspiración.',
      4: 'Organiza tus pensamientos y planes. Claridad mental para estructurar.',
      5: 'Vientos de cambio soplan a tu favor. Viaja, explora, comunica.',
      6: 'Amor expresado en palabras y gestos. Comunica tu afecto abiertamente.',
      7: 'Insights mentales profundos. La meditación trae claridad extraordinaria.',
      8: 'Poder de la comunicación y negociación. Tus palabras manifiestan realidad.',
      9: 'Cierra ciclos con conversaciones pendientes. Libera el aire estancado.',
    },
    agua: {
      1: 'Nuevos comienzos guiados por la intuición. Siente el camino correcto.',
      2: 'Empatía profunda en conexiones. Tu sensibilidad fortalece vínculos.',
      3: 'Creatividad que fluye desde las emociones. Expresa tu arte interior.',
      4: 'Estructura emocional necesaria. Crea límites saludables con amor.',
      5: 'Fluye con los cambios como el agua. Adaptabilidad emocional es clave.',
      6: 'Amor incondicional fluye. Cuida con la profundidad del océano.',
      7: 'Reflexión emocional profunda. Sumérgete en tu mundo interior.',
      8: 'Poder intuitivo para manifestar. Confía en tus corazonadas.',
      9: 'Liberación emocional sanadora. Deja ir con lágrimas de transformación.',
    },
  };

  return messages[moonVibe.element]?.[dayFocus.number] || 
    `Hoy es un ${dayFocus.name.toLowerCase()}. ${dayFocus.description}. La Luna en ${moonVibe.sign} trae ${moonVibe.vibe.toLowerCase()}.`;
}

// Main calculation function
export function calculateCosmicClimate(birthDate: Date | null): CosmicClimate {
  const today = new Date();
  
  const dayFocus = calculateDayFocus(birthDate, today);
  const moonVibe = getMoonSign(today);
  const energyLevel = calculateEnergyLevel(dayFocus.number, moonVibe.element);
  const combinedMessage = generateCombinedMessage(dayFocus, moonVibe);
  
  // Create combined vibration string
  const vibrationParts = [dayFocus.name.split(' ').pop(), moonVibe.vibe.split(' & ')[0]];
  const combinedVibration = vibrationParts.join(' & ');
  
  return {
    dayFocus,
    moonVibe,
    combinedMessage,
    combinedVibration,
    energyLevel,
  };
}

// Get zodiac symbol by sign name
export function getZodiacSymbol(signName: string): string {
  const sign = ZODIAC_SIGNS.find(
    (s) => s.sign.toLowerCase() === signName?.toLowerCase()
  );
  return sign?.symbol || '⭐';
}
