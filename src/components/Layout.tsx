import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';
import { ChevronDown, Star, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

interface NavDropdown {
  label: string;
  emoji: string;
  items: { path: string; label: string; emoji: string }[];
}

const navDropdowns: NavDropdown[] = [
  {
    label: 'Astrología',
    emoji: '✨',
    items: [
      { path: '/signos', label: 'Signos', emoji: '♈' },
      { path: '/compatibilidad', label: 'Compatibilidad', emoji: '💕' },
      { path: '/casas', label: 'Casas', emoji: '🏠' },
      { path: '/planetas', label: 'Planetas', emoji: '☉' },
      { path: '/aspectos', label: 'Aspectos', emoji: '△' },
    ],
  },
  {
    label: 'Numerología',
    emoji: '🔢',
    items: [
      { path: '/numeros', label: 'Números', emoji: '🔢' },
      { path: '/calculadora', label: 'Calculadora', emoji: '🧮' },
      { path: '/compatibilidad-numerologica', label: 'Compatibilidad', emoji: '💕' },
      { path: '/ciclos-personales', label: 'Ciclos Personales', emoji: '🔄' },
    ],
  },
];

const fixedNavItems = [
  { path: '/transitos-2026', label: '2026', emoji: '📅' },
];

const DropdownMenu = ({ dropdown, isActive }: { dropdown: NavDropdown; isActive: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
          isActive
            ? 'bg-primary/20 text-primary'
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
        }`}
      >
        <span>{dropdown.emoji}</span>
        <span>{dropdown.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-52 py-2 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg animate-fade-in z-50">
          {dropdown.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const UserMenu = () => {
  const { user, signOut } = useAuth();
  
  if (!user) {
    return (
      <Link
        to="/auth"
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
      >
        <LogIn className="w-4 h-4" />
        <span className="hidden sm:inline">Entrar</span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <Link
        to="/favoritos"
        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
        title="Favoritos"
      >
        <Star className="w-5 h-5" />
      </Link>
      <button
        onClick={() => signOut()}
        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
        title="Cerrar sesión"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isDropdownActive = (dropdown: NavDropdown) => {
    return dropdown.items.some((item) => location.pathname.startsWith(item.path));
  };

  return (
    <div className="min-h-screen font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🌌</span>
              <span className="font-display text-xl font-semibold gradient-text hidden sm:block">
                Sabiduría Cuántica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    location.pathname.startsWith(item.path)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* User Actions & Search & Mobile Menu */}
            <div className="flex items-center gap-2">
              <UserMenu />
              
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Buscar"
              >
                <span className="text-xl">🔍</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Menú"
              >
                <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 animate-fade-in max-h-[70vh] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.label}>
                  <button
                    onClick={() =>
                      setExpandedMobile(expandedMobile === dropdown.label ? null : dropdown.label)
                    }
                    className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                      isDropdownActive(dropdown)
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{dropdown.emoji}</span>
                      <span>{dropdown.label}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedMobile === dropdown.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedMobile === dropdown.label && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 animate-fade-in">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                            location.pathname.startsWith(item.path)
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                          }`}
                        >
                          <span>{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Fixed nav items for mobile */}
              {fixedNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    location.pathname.startsWith(item.path)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-8 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>🌌 Sabiduría Cuántica © 2026 - Explora el cosmos interior</p>
        </div>
      </footer>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Layout;
