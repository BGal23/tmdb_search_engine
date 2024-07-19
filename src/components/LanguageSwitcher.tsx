import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => changeLanguage("en")}>ENG</button>
      <button onClick={() => changeLanguage("pl")}>PL</button>
    </div>
  );
};

export default LanguageSwitcher;