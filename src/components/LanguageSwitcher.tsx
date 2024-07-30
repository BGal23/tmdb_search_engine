import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    Cookies.set("i18next", language, { expires: 7, path: "/" });
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div className="flex gap-4">
      <button
        className="transition-all duration-500 ease hover:scale-110"
        onClick={() => changeLanguage("en")}
      >
        ENG
      </button>
      <button
        className="transition-all duration-500 ease hover:scale-110"
        onClick={() => changeLanguage("pl")}
      >
        PL
      </button>
    </div>
  );
};

export default LanguageSwitcher;
