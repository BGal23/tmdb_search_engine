import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    // <div className="bg-header-img bg-center h-96 mt-12 object-contain">
    //   <div className="bg-black opacity-40 w-full h-full flex justify-center items-center">
    //     <input className="h-6 text-black" type="text" />
    //   </div>
    // </div>
    <div className="mt-12 md:mt-14 lg:mt-16 flex flex-col items-center">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/background-desktop.jpg"
        />
        <source media="(min-width: 768px)" srcSet="/images/bg-desktop.jpg" />
        <img
          className="w-full h-48 md:h-64 lg:h-96 object-cover"
          src="/images/background-desktop.jpg"
          alt={t("headerPhoto")}
        />
      </picture>
      <input
        className="h-8 text-black relative bottom-28 md:bottom-36 lg:bottom-52"
        type="text"
      />
    </div>
  );
};

export default Header;
