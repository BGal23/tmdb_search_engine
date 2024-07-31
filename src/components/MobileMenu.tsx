"use client";

import { useTranslation } from "next-i18next";
import { INavMenuProps } from "@/types/props";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenu: React.FC<INavMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { t } = useTranslation("common");

  return (
    <div
      className="w-40 z-50 bg-black/80 fixed top-12 right-0 transition-all duration-300 ease border-l border-b border-white/70 rounded-bl-lg"
      style={{
        right: isMobileMenuOpen ? undefined : "-32em",
      }}
    >
      <div className="flex flex-col w-full pl-4 py-2">
        <Link href="#bestMovies" onClick={() => setIsMobileMenuOpen(false)}>
          {t("bestMovies")}
        </Link>
        <Link
          href="#bestSeries"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mb-2"
        >
          {t("bestSeries")}
        </Link>
        <LanguageSwitcher setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </div>
  );
};

export default MobileMenu;
