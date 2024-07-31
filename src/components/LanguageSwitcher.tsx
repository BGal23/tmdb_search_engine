import { ILanguageSwitcherProps } from "@/types/props";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({
  setIsMobileMenuOpen,
}) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const languageCodes = {
    pl: "pl",
    en: "en",
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    Cookies.set("i18next", language, { expires: 7, path: "/" }); // sets the cookie without having to re-render the page
    router.push(router.pathname, router.asPath, { locale: language });
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex gap-4">
      <button
        className="transition-all duration-500 ease hover:scale-110"
        onClick={() => changeLanguage(languageCodes.en)}
      >
        ENG
      </button>
      <button
        className="transition-all duration-500 ease hover:scale-110"
        onClick={() => changeLanguage(languageCodes.pl)}
      >
        PL
      </button>
    </div>
  );
};

export default LanguageSwitcher;
