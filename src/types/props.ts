import { MediaData } from "./data";

export interface SectionProps {
  title: string;
  data: MediaData[];
  language: "en" | "pl";
  anchor: string;
}

export interface HomeProps {
  movies: MediaData[];
  tv: MediaData[];
  language: "en" | "pl";
  searched: MediaData[];
}

export interface MenuMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

export interface SearchedProps {
  data: MediaData[];
  language: "en" | "pl";
}
