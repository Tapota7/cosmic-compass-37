import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: '/signos', label: 'Signos', emoji: '♈' },
  { path: '/casas', label: 'Casas', emoji: '🏠' },
  { path: '/planetas', label: 'Planetas', emoji: '☉' },
  { path: '/numerologia', label: 'Numerología', emoji: '🔢' },
  { path: '/aspectos', label: 'Aspectos', emoji: '△' },
  { path: '/transitos-2026', label: '2026', emoji: '📅' },
];

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

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
              {navItems.map((item) => (
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

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-2">
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
          <div className="lg:hidden border-t border-border/50 animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
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
      <main className="pt-20 pb-8 min-h-screen">
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
