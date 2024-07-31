import { IMediaData } from "./data";

export interface ISectionProps {
  title: string;
  data: IMediaData[];
  language: "en" | "pl";
  anchor: string;
}

export interface IHomeProps {
  movies: IMediaData[];
  tv: IMediaData[];
  language: "en" | "pl";
  searchArray: IMediaData[];
  searchQuery: string;
}

export interface INavMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  setIsSearchedMenuOpen?: (isSearchedMenuOpen: boolean) => void;
}

export interface ISearchedProps {
  data: IMediaData[];
  language: "en" | "pl";
  searchQuery: string;
  isSearchedMenuOpen: boolean;
  setIsSearchedMenuOpen: (isSearchedMenuOpen: boolean) => void;
}

export interface IInputProps {
  setIsSearchedMenuOpen: (isSearchedMenuOpen: boolean) => void;
}

export interface ILanguageSwitcherProps {
  setIsMobileMenuOpen?: (isMobileMenuOpen: boolean) => void;
}
