import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const navigate = useNavigate();

  const handleViewConsultas = () => {
    onClose();
    navigate('/consultas');
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-fade-in">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <DialogTitle className="text-xl font-display">
            ¡Listo! Revisa tu Email
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Te enviamos tus resultados de numerología. Revisa tu bandeja de entrada (y spam por si acaso).
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-3">
          <Button
            onClick={handleViewConsultas}
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Ver Consultas Premium
          </Button>
          
          <button
            onClick={onClose}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Ver mis resultados
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
