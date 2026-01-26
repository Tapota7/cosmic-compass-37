import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navDropdowns, fixedNavItems, NavDropdown } from './NavData';
import { Badge } from '@/components/ui/badge';

interface DropdownMenuProps {
  dropdown: NavDropdown;
  isActive: boolean;
}

const DropdownMenu = ({ dropdown, isActive }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
          isActive
            ? 'text-white'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        <span>{dropdown.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[200px] py-2 rounded-lg border border-gray-800/50 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-purple-900/20 animate-fade-in z-50">
          {dropdown.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md mx-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopNav = () => {
  const location = useLocation();

  const isDropdownActive = (dropdown: NavDropdown) => {
    return dropdown.items.some((item) => location.pathname.startsWith(item.path));
  };

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navDropdowns.map((dropdown) => (
        <DropdownMenu
          key={dropdown.label}
          dropdown={dropdown}
          isActive={isDropdownActive(dropdown)}
        />
      ))}
      {fixedNavItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
            location.pathname.startsWith(item.path)
              ? 'text-white'
              : item.highlight
                ? 'text-primary hover:text-primary/80'
                : 'text-gray-300 hover:text-white'
          }`}
        >
          {item.label}
          {item.badge && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/20 text-primary border-primary/30">
              {item.badge}
            </Badge>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
