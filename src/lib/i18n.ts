import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import enTranslations from "../../public/locales/en/common.json";
import plTranslations from "../../public/locales/pl/common.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
    resources: {
      en: { translation: enTranslations },
      pl: { translation: plTranslations },
    },
  });

export default i18n;
