import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { userMenuItems } from './NavData';

const UserDropdown = () => {
  const { user, signOut } = useAuth();
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

  if (!user) {
    return (
      <Link
        to="/auth"
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
      >
        <LogIn className="w-4 h-4" />
        <span className="hidden sm:inline">Entrar</span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1.5 p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Menú de usuario"
      >
        <User className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 min-w-[180px] py-2 rounded-lg border border-gray-800/50 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-purple-900/20 animate-fade-in z-50">
          {userMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md mx-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="h-px bg-gray-800/50 my-2 mx-2" />
          <button
            onClick={() => {
              signOut();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md mx-2 transition-colors"
            style={{ width: 'calc(100% - 16px)' }}
          >
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
