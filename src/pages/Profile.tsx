import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Hash, Save, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { zodiacSignsList } from '@/data/compatibility';

const Profile = () => {
  const { user, profile, loading: authLoading, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || '');
      setBirthDate(profile.birth_date || '');
      setZodiacSign(profile.zodiac_sign || '');
      setLifePathNumber(profile.life_path_number?.toString() || '');
    }
  }, [profile]);

  const handleSave = async () => {
    setIsSaving(true);
    
    const { error } = await updateProfile({
      full_name: fullName || null,
      birth_date: birthDate || null,
      zodiac_sign: zodiacSign || null,
      life_path_number: lifePathNumber ? parseInt(lifePathNumber) : null,
    });

    if (error) {
      toast({
        title: 'Error al guardar',
        description: 'No se pudo actualizar tu perfil',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Perfil actualizado',
        description: 'Tus cambios han sido guardados',
      });
    }
    
    setIsSaving(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Mi Perfil"
        description="Administra tu perfil personal con tu fecha de nacimiento, signo solar y número de vida."
        keywords="perfil, cuenta, astrología personal"
      />
      
      <div className="container mx-auto px-4 max-w-2xl">
        <BackButton />

        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold gradient-text mb-2">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground">
            {user?.email}
          </p>
        </div>

        <div className="glass-card space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Nombre Completo
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Signo solar */}
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <span>♈</span>
              Signo Solar
            </label>
            <select
              value={zodiacSign}
              onChange={(e) => setZodiacSign(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Selecciona tu signo</option>
              {zodiacSignsList.map((sign) => (
                <option key={sign.id} value={sign.id}>
                  {sign.symbol} {sign.name}
                </option>
              ))}
            </select>
          </div>

          {/* Número de vida */}
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Hash className="w-4 h-4" />
              Número de Vida
            </label>
            <select
              value={lifePathNumber}
              onChange={(e) => setLifePathNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Selecciona tu número</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              ¿No conoces tu número? <a href="/calculadora" className="text-primary hover:underline">Calcúlalo aquí</a>
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all pulse-glow flex items-center justify-center gap-2"
          >
            {isSaving ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {isSaving ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
