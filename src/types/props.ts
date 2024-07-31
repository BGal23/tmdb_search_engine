import { IMediaData } from "./data";

export interface ISectionProps {
  title: string;
  data: IMediaData[];
  language: string;
  anchor: string;
}

export interface IHomeProps {
  movies: IMediaData[];
  tv: IMediaData[];
  language: string;
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
  language: string;
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
