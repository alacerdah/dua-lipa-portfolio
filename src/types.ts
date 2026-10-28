export interface Stat {
  number: string;
  label: string;
}

export interface Tag {
  label: string;
}

export interface VideoItem {
  id: string;
  label: string;
  url?: string;
}

export interface PhotoItem {
  id: string;
  tag: string;
  tall?: boolean;
  src?: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface Brand {
  id: string;
  label: string;
  logoSrc: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Conteúdo completo de um portfólio — troque este objeto pra reaproveitar o template com outra criadora. */
export interface PortfolioContent {
  brandInitials: string;
  name: string;
  tagline: string;
  heroPhoto?: string;
  nav: NavLink[];
  about: {
    heading: string;
    text: string;
    photo?: string;
  };
  stats: Stat[];
  niche: {
    heading: string;
    left: Tag[];
    right: Tag[];
  };
  videos: VideoItem[];
  photos: PhotoItem[];
  process: ProcessStep[];
  brands: Brand[];
  contact: {
    heading: string;
    email: string;
    instagram: string;
    whatsapp?: string;
    ctaLabel: string;
  };
}
