import Link from "next/link";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-col md:flex-row justify-around items-center border-t border-white/70 p-4 gap-6">
      <Logo />
      <p className="max-w-full md:max-w-52 xl:max-w-full text-center">
        This is a short description about the website. It provides useful
        information to the visitors.
      </p>
      <div className="flex flex-col items-center">
        <h3 className="text-lg">- Links -</h3>
        <ul className="flex flex-col items-center">
          <li>
            <Link href="#bestMovies">{t("bestMovies")}</Link>
          </li>
          <li>
            <Link href="#bestSeries">{t("bestSeries")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
