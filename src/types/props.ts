import { MediaData } from "./data";

export interface SectionProps {
  title: string;
  data: MediaData[];
  language: string;
  anchor: string;
}

export interface HomeProps {
  movies: MediaData[];
  tv: MediaData[];
  language: string;
}

export interface MenuMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}
