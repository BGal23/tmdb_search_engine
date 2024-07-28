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
  searchArray: MediaData[];
  searchQuery: string;
}

export interface NavMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  setIsSearchedMenuOpen?: (isSearchedMenuOpen: boolean) => void;
}

export interface SearchedProps {
  data: MediaData[];
  language: "en" | "pl";
  searchQuery: string;
  isSearchedMenuOpen: boolean;
  setIsSearchedMenuOpen: (isSearchedMenuOpen: boolean) => void;
}
