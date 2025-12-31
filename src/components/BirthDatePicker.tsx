import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BirthDatePickerProps {
  value: string;
  onChange: (date: string) => void;
  className?: string;
}

const months = [
  { value: '01', label: 'Enero' },
  { value: '02', label: 'Febrero' },
  { value: '03', label: 'Marzo' },
  { value: '04', label: 'Abril' },
  { value: '05', label: 'Mayo' },
  { value: '06', label: 'Junio' },
  { value: '07', label: 'Julio' },
  { value: '08', label: 'Agosto' },
  { value: '09', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
];

// Generate years from current year - 10 to 1930
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 10 - 1929 }, (_, i) => currentYear - 10 - i);

const getDaysInMonth = (month: string, year: string): number => {
  if (!month || !year) return 31;
  const m = parseInt(month);
  const y = parseInt(year);
  if ([4, 6, 9, 11].includes(m)) return 30;
  if (m === 2) {
    // Leap year check
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0) ? 29 : 28;
  }
  return 31;
};

const BirthDatePicker = ({ value, onChange, className = '' }: BirthDatePickerProps) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Parse initial value
  useEffect(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        setYear(parts[0]);
        setMonth(parts[1]);
        setDay(parts[2]);
      }
    }
  }, [value]);

  // Update parent when all fields are selected
  useEffect(() => {
    if (day && month && year) {
      // Validate day doesn't exceed max days for the month
      const maxDays = getDaysInMonth(month, year);
      const validDay = parseInt(day) > maxDays ? String(maxDays).padStart(2, '0') : day;
      if (validDay !== day) {
        setDay(validDay);
      }
      onChange(`${year}-${month}-${validDay}`);
    }
  }, [day, month, year, onChange]);

  const maxDays = getDaysInMonth(month, year);
  const days = Array.from({ length: maxDays }, (_, i) => String(i + 1).padStart(2, '0'));

  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      {/* Day */}
      <Select value={day} onValueChange={setDay}>
        <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
          <SelectValue placeholder="Día" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border max-h-60">
          {days.map((d) => (
            <SelectItem key={d} value={d}>
              {parseInt(d)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Month */}
      <Select value={month} onValueChange={setMonth}>
        <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
          <SelectValue placeholder="Mes" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border max-h-60">
          {months.map((m) => (
            <SelectItem key={m.value} value={m.value}>
              {m.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Year */}
      <Select value={year} onValueChange={setYear}>
        <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
          <SelectValue placeholder="Año" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border max-h-60">
          {years.map((y) => (
            <SelectItem key={y} value={String(y)}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BirthDatePicker;
