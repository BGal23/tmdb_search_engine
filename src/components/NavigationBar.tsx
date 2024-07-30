"use client";

import { useTranslation } from "next-i18next";
import { NavMenuProps } from "@/types/props";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import Link from "next/link";
import MobileBtn from "./MobileBtn";

const NavigationBar: React.FC<NavMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { t } = useTranslation("common");

  return (
    <div className="fixed w-full bg-black/80 z-50 h-12 md:h-14 lg:h-16 top-0 border-b border-white/70">
      <div className="container flex flex-row items-center justify-between md:justify-start h-full">
        <Link href="/">
          <Logo />
        </Link>
        <MobileBtn
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div className="hidden md:block md:flex md:flex-row justify-between w-full ml-8">
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
      </div>
    </div>
  );
};

export default NavigationBar;
