export interface NavItem {
  path: string;
  label: string;
}

export interface NavDropdown {
  label: string;
  items: NavItem[];
}

export interface NavDirect {
  path: string;
  label: string;
  highlight?: boolean;
}

export const navDropdowns: NavDropdown[] = [
  {
    label: 'Astrología',
    items: [
      { path: '/signos', label: 'Signos' },
      { path: '/planetas', label: 'Planetas' },
      { path: '/casas', label: 'Casas' },
      { path: '/aspectos', label: 'Aspectos' },
    ],
  },
  {
    label: 'Numerología',
    items: [
      { path: '/numeros', label: 'Números' },
      { path: '/grabovoi', label: 'Grabovoi' },
    ],
  },
  {
    label: 'Reiki',
    items: [
      { path: '/reiki/historia', label: 'Historia' },
      { path: '/reiki/niveles', label: 'Niveles' },
      { path: '/reiki/chakras', label: 'Chakras' },
      { path: '/reiki/principios', label: 'Principios' },
      { path: '/reiki/simbolos', label: 'Símbolos' },
      { path: '/reiki/posiciones', label: 'Posiciones' },
    ],
  },
  {
    label: 'Autoconocimiento',
    items: [
      { path: '/autoconocimiento/compatibilidad', label: 'Compatibilidad' },
      { path: '/calculadora', label: 'Calculadora Numerológica' },
      { path: '/ciclos-personales', label: 'Ciclos Personales' },
    ],
  },
];

export const fixedNavItems: NavDirect[] = [
  { path: '/transitos-2026', label: 'Tránsitos 2026' },
  { path: '/consultas', label: 'Servicios', highlight: true },
];

export const userMenuItems: NavItem[] = [
  { path: '/dashboard', label: 'Mi Dashboard' },
  { path: '/favoritos', label: 'Favoritos' },
  { path: '/historial', label: 'Historial' },
  { path: '/perfil', label: 'Mi Perfil' },
];
