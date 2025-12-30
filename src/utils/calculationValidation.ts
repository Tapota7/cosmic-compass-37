import { z } from 'zod';

// Maximum allowed size for JSON payloads (in characters when stringified)
const MAX_JSON_SIZE = 10000;

// Input schemas for each calculation type
const numerologyInputSchema = z.object({
  name: z.string().min(1).max(200),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
});

const astrologicalCompatibilityInputSchema = z.object({
  sign1: z.string().min(1).max(50),
  sign2: z.string().min(1).max(50),
});

const numerologicalCompatibilityInputSchema = z.object({
  name1: z.string().min(1).max(200),
  birthDate1: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  name2: z.string().min(1).max(200),
  birthDate2: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
});

const personalCyclesInputSchema = z.object({
  name: z.string().min(1).max(200),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
});

// Result schemas - more permissive since they contain calculation outputs
const numerologyResultSchema = z.object({
  lifePathNumber: z.number().int().min(1).max(11),
  destinyNumber: z.number().int().min(1).max(11),
  soulNumber: z.number().int().min(1).max(11),
  personalityNumber: z.number().int().min(1).max(11),
  personalYearNumber: z.number().int().min(1).max(9),
});

const astrologicalCompatibilityResultSchema = z.object({
  compatibility: z.number().min(0).max(100),
  description: z.string().max(2000),
  strengths: z.array(z.string().max(500)).max(10),
  challenges: z.array(z.string().max(500)).max(10),
});

const numerologicalCompatibilityResultSchema = z.object({
  lifePathNumber1: z.number().int().min(1).max(11),
  lifePathNumber2: z.number().int().min(1).max(11),
  compatibility: z.number().min(0).max(100),
  description: z.string().max(2000).optional(),
});

const personalCyclesResultSchema = z.object({
  personalYear: z.number().int().min(1).max(9),
  personalMonth: z.number().int().min(1).max(9),
  personalDay: z.number().int().min(1).max(9),
  pinnacles: z.array(z.number().int().min(1).max(11)).max(4).optional(),
  challenges: z.array(z.number().int().min(0).max(11)).max(4).optional(),
});

// Calculation type validation
const calculationTypeSchema = z.enum([
  'numerologia',
  'compatibilidad_astrologica',
  'compatibilidad_numerologica',
  'ciclos_personales'
]);

export type CalculationType = z.infer<typeof calculationTypeSchema>;

// Validate JSON size to prevent excessively large payloads
function validateJsonSize(data: unknown, fieldName: string): void {
  const jsonString = JSON.stringify(data);
  if (jsonString.length > MAX_JSON_SIZE) {
    throw new Error(`${fieldName} exceeds maximum allowed size of ${MAX_JSON_SIZE} characters`);
  }
}

// Main validation function for input data
export function validateInputData(type: CalculationType, inputData: unknown): unknown {
  validateJsonSize(inputData, 'input_data');
  
  switch (type) {
    case 'numerologia':
      return numerologyInputSchema.parse(inputData);
    case 'compatibilidad_astrologica':
      return astrologicalCompatibilityInputSchema.parse(inputData);
    case 'compatibilidad_numerologica':
      return numerologicalCompatibilityInputSchema.parse(inputData);
    case 'ciclos_personales':
      return personalCyclesInputSchema.parse(inputData);
    default:
      throw new Error(`Unknown calculation type: ${type}`);
  }
}

// Main validation function for result data
export function validateResultData(type: CalculationType, resultData: unknown): unknown {
  validateJsonSize(resultData, 'result_data');
  
  switch (type) {
    case 'numerologia':
      return numerologyResultSchema.parse(resultData);
    case 'compatibilidad_astrologica':
      return astrologicalCompatibilityResultSchema.parse(resultData);
    case 'compatibilidad_numerologica':
      return numerologicalCompatibilityResultSchema.parse(resultData);
    case 'ciclos_personales':
      return personalCyclesResultSchema.parse(resultData);
    default:
      throw new Error(`Unknown calculation type: ${type}`);
  }
}

// Validate calculation type
export function validateCalculationType(type: unknown): CalculationType {
  return calculationTypeSchema.parse(type);
}

// Combined validation function
export function validateCalculationData(
  type: unknown,
  inputData: unknown,
  resultData: unknown
): { type: CalculationType; inputData: unknown; resultData: unknown } {
  const validatedType = validateCalculationType(type);
  const validatedInput = validateInputData(validatedType, inputData);
  const validatedResult = validateResultData(validatedType, resultData);
  
  return {
    type: validatedType,
    inputData: validatedInput,
    resultData: validatedResult,
  };
}
