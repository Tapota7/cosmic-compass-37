import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, LogOut, Home, Calculator } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { navDropdowns, fixedNavItems, userMenuItems, navCTA } from './NavData';
import { Badge } from '@/components/ui/badge';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav = ({ isOpen, onToggle }: MobileNavProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const { user, signOut } = useAuth();

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-gray-950/98 backdrop-blur-lg lg:hidden animate-slide-in-left overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {/* Home Link */}
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-3 text-base font-medium transition-colors border-b border-gray-800/50 ${
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="w-5 h-5" />
              Inicio
            </Link>

            {/* CTA Calculator Button */}
            <Link
              to={navCTA.path}
              className="flex items-center justify-center gap-2 mx-4 my-3 px-4 py-3 text-base font-medium bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-full shadow-lg shadow-primary/30 transition-all duration-300"
            >
              <Calculator className="w-5 h-5" />
              🔢 Calculadora de Numerología
            </Link>

            {/* Dropdown Sections */}
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.label} className="border-b border-gray-800/50 pb-2">
                <button
                  onClick={() => toggleSection(dropdown.label)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <span>{dropdown.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === dropdown.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedSection === dropdown.label && (
                  <div className="pl-4 pb-2 animate-fade-in">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2.5 text-sm rounded-md transition-colors ${
                          location.pathname.startsWith(item.path)
                            ? 'text-primary bg-primary/10'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Fixed Nav Items */}
            {fixedNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-base font-medium transition-colors flex items-center gap-2 ${
                  location.pathname.startsWith(item.path)
                    ? 'text-white'
                    : item.highlight
                      ? 'text-primary hover:text-primary/80'
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.badge && (
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/20 text-primary">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}

            {/* User Section */}
            <div className="border-t border-gray-800/50 mt-4 pt-4">
              {user ? (
                <>
                  <p className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mi Cuenta
                  </p>
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  Entrar
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
