import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { NavMenuProps } from "@/types/props";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import Link from "next/link";

const NavigationBar: React.FC<NavMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsSearchedMenuOpen,
}) => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!isClient) {
    return null;
  }

  return (
    <div
      onClick={() => {
        if (setIsSearchedMenuOpen) {
          setIsSearchedMenuOpen(false);
        }
      }}
      className="fixed w-full bg-black/80 z-50 h-12 md:h-14 lg:h-16 top-0 border-b border-white/70"
    >
      <div className="container flex flex-row items-center justify-between md:justify-start h-full">
        <Link href="/">
          <Logo />
        </Link>
        {isMobile ? (
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        ) : (
          <div className="flex flex-row justify-between w-full ml-8">
            <div className="flex gap-4 items-center">
              <Link
                className="transition-all duration-500 ease hover:scale-105"
                href="#bestMovies"
              >
                {t("bestMovies")}
              </Link>
              <Link
                className="transition-all duration-500 ease hover:scale-105"
                href="#bestSeries"
              >
                {t("bestSeries")}
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
