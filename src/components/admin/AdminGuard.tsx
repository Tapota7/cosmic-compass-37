import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdminRole } from '@/hooks/useAdminRole';
import { Loader2, ShieldX } from 'lucide-react';

interface AdminGuardProps {
  children: ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
  const { user, loading: authLoading } = useAuth();
  const { data: isAdmin, isLoading: roleLoading } = useAdminRole();

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <ShieldX className="w-16 h-16 text-destructive" />
        <h1 className="text-2xl font-bold text-center">Acceso Denegado</h1>
        <p className="text-muted-foreground text-center max-w-md">
          No tienes permisos de administrador para acceder a esta sección.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminGuard;
