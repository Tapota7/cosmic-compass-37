import { useState, useEffect, useRef, useCallback } from 'react';
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
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);

  // Close menu with animation
  const closeMenu = useCallback(() => {
    if (!isOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onToggle();
    }, 200);
  }, [isOpen, onToggle]);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      closeMenu();
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

  // Handle swipe to close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const swipeDistance = touchStartX.current - touchCurrentX.current;
    // If swiped left more than 80px, close the menu
    if (swipeDistance > 80) {
      closeMenu();
    }
  }, [closeMenu]);

  // Close menu when clicking outside
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  }, [closeMenu]);

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="lg:hidden p-3 -ml-2 text-gray-300 hover:text-white transition-colors active:scale-95"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Fullscreen Overlay */}
      {(isOpen || isClosing) && (
        <div 
          className="fixed inset-0 top-14 z-50 lg:hidden"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
              isClosing ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Menu Panel */}
          <div
            ref={menuRef}
            className={`absolute inset-y-0 left-0 w-[85%] max-w-sm bg-gray-950 border-r border-gray-800/50 shadow-2xl overflow-y-auto ${
              isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <nav className="px-4 py-6 flex flex-col gap-1">
              {/* Home Link */}
              <Link
                to="/"
                className={`flex items-center gap-3 px-4 py-4 text-base font-medium transition-colors rounded-xl active:scale-[0.98] ${
                  location.pathname === '/'
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Home className="w-5 h-5" />
                Inicio
              </Link>

              {/* CTA Calculator Button */}
              <Link
                to={navCTA.path}
                className="flex items-center justify-center gap-2 mx-2 my-3 px-4 py-4 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 active:scale-[0.98]"
              >
                <Calculator className="w-5 h-5" />
                🔢 Calculadora de Numerología
              </Link>

              {/* Dropdown Sections */}
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.label} className="border-b border-gray-800/30 pb-1">
                  <button
                    onClick={() => toggleSection(dropdown.label)}
                    className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-gray-300 hover:text-white transition-colors rounded-xl active:bg-gray-800/30"
                  >
                    <span>{dropdown.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedSection === dropdown.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      expandedSection === dropdown.label 
                        ? 'max-h-[500px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 pb-2">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-3 text-sm rounded-lg transition-colors active:scale-[0.98] ${
                            location.pathname.startsWith(item.path)
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Fixed Nav Items */}
              {fixedNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-4 text-base font-medium transition-colors flex items-center gap-2 rounded-xl active:scale-[0.98] ${
                    location.pathname.startsWith(item.path)
                      ? 'text-white bg-gray-800/50'
                      : item.highlight
                        ? 'text-primary hover:text-primary/80 hover:bg-primary/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
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
                        className={`block px-4 py-3 text-sm transition-colors rounded-lg active:scale-[0.98] ${
                          location.pathname === item.path
                            ? 'text-primary bg-primary/10'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <button
                      onClick={() => signOut()}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-400 hover:text-white transition-colors rounded-lg active:scale-[0.98] hover:bg-gray-800/50"
                    >
                      <LogOut className="w-4 h-4" />
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <Link
                    to="/auth"
                    className="flex items-center gap-2 px-4 py-4 text-base font-medium text-primary hover:text-primary/80 transition-colors rounded-xl active:scale-[0.98] hover:bg-primary/10"
                  >
                    <LogIn className="w-5 h-5" />
                    Entrar
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
