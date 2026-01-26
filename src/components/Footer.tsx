import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

// Custom TikTok icon (Lucide doesn't include it)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const footerLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/consultas', label: 'Servicios' },
    { path: '/blog', label: 'Blog' },
    { path: '/transitos-2026', label: 'Tránsitos 2026' },
    { path: '/cursos', label: 'Cursos', badge: 'Próximamente' },
    { path: '/numerologia', label: 'Calculadora de Numerología' },
  ];

  const socialLinks = [
    { 
      name: 'TikTok',
      url: 'https://www.tiktok.com/@sabiduria_cuantica',
      Icon: TikTokIcon,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sabiduria_cuantica/',
      Icon: Instagram,
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Section 1 - About */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-2xl">🌌</span>
              <span className="font-display text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Sabiduría Cuántica
              </span>
            </div>
            <p className="text-primary/80 italic text-sm">
              Tu guía en el viaje del autoconocimiento cósmico
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Astrología Evolutiva Kármica y Numerología para descubrir 
              tu propósito de vida, vocación y relaciones conscientes.
            </p>
          </div>

          {/* Section 2 - Quick Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
              Explorar
            </h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 text-xs text-primary/60">
                      ({link.badge})
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3 - Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
              Conecta conmigo
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:damianmenard710@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center md:justify-start"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>damianmenard710@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/5493537608355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center md:justify-start"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+54 9 3537 60-8355</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm justify-center md:justify-start">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Bell Ville, Córdoba, Argentina</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 hover:text-white hover:scale-110 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/30"
                  aria-label={`Síguenos en ${social.name}`}
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4 - Legal */}
        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-muted-foreground/70 text-sm mb-2">
            © 2026 Sabiduría Cuántica. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Diseñado con <span className="text-red-400">❤️</span> en Argentina
            <span className="mx-2">•</span>
            <Link to="/cursos" className="text-primary/60 hover:text-primary transition-colors">
              📚 Cursos (Próximamente)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
