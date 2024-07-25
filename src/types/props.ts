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

export interface NavMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  setIsSearchedMenuOpen?: (isSearchedMenuOpen: boolean) => void;
}

export interface SearchedProps {
  data: MediaData[];
  language: "en" | "pl";
  setIsSearchedMenuOpen: (isSearchedMenuOpen: boolean) => void;
}
