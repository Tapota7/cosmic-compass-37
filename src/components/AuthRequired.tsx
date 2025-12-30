import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, LogIn } from 'lucide-react';

interface AuthRequiredProps {
  children: React.ReactNode;
  message?: string;
}

const AuthRequired = ({ children, message = "Inicia sesión para usar esta herramienta" }: AuthRequiredProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl float-animation mb-4">✨</div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="glass-card text-center py-12 mt-12">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold gradient-text mb-4">
            Acceso Exclusivo
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {message}. Regístrate gratis para acceder a todas las calculadoras y guardar tu historial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all pulse-glow"
            >
              <LogIn className="w-5 h-5" />
              Iniciar Sesión
            </Link>
            <Link
              to="/auth?mode=signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-all border border-border"
            >
              Crear Cuenta Gratis
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-medium mb-4">Beneficios de registrarte:</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="p-3 rounded-lg bg-secondary/30">
                <span className="text-lg mb-2 block">📊</span>
                Estadísticas personales
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <span className="text-lg mb-2 block">📜</span>
                Historial de cálculos
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <span className="text-lg mb-2 block">⭐</span>
                Favoritos guardados
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthRequired;
