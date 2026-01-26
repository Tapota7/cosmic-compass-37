import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SearchModal from './SearchModal';
import WhatsAppButton from './WhatsAppButton';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import UserDropdown from './navigation/UserDropdown';

// Prefetch popular routes after initial load
const prefetchRoutes = () => {
  setTimeout(() => {
    import('@/pages/Numerology');
    import('@/pages/ZodiacList');
    import('@/pages/Consultas');
  }, 2000);
};
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prefetch popular routes after initial load
  useEffect(() => {
    prefetchRoutes();
  }, []);
  return <div className="min-h-screen font-body">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-purple-900/5 border-b border-gray-800/30' : 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-purple-900/10'}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Mobile: Hamburger on LEFT */}
            <div className="lg:hidden">
              <MobileNav isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>

            {/* Logo/Home Link - Visible on mobile (center) */}
            <Link to="/" className="lg:hidden absolute left-1/2 -translate-x-1/2 font-display text-base font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              🏠 Inicio
            </Link>

            {/* Desktop Navigation with Home Link */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="font-display text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity mr-4"> Inicio</Link>
              <DesktopNav />
            </div>

            {/* Right side: Search & User */}
            <div className="flex items-center gap-1">
              {/* Search Button */}
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gray-300 hover:text-white transition-colors" aria-label="Buscar">
                <Search className="w-5 h-5" />
              </button>

              {/* User Dropdown */}
              <UserDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-8 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-3">Sabiduría Cuántica © 2026 - Explora el cosmos interior</p>
          <Link to="/cursos" className="text-primary/70 hover:text-primary transition-colors text-xs inline-flex items-center gap-1">
            📚 Cursos (Próximamente)
          </Link>
        </div>
      </footer>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>;
};
export default Layout;