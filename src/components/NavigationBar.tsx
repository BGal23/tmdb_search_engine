import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex justify-between items-center">
      <div className="flex gap-4">
        <h4>LOGO</h4>
        <a>{t("bestMovies")}</a>
        <a>{t("bestSeries")}</a>
      </div>
      <LanguageSwitcher />
    </div>
  );
};

export default NavigationBar;
