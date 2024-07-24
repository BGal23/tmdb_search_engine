import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (typeof router.query.search === "string") {
      setSearchQuery(router.query.search);
    } else if (Array.isArray(router.query.search)) {
      setSearchQuery(router.query.search[0] || "");
    }
  }, [router.query.search]);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      router.push(`/?search=${searchQuery}`);
    } else {
      router.push(`/`);
    }
  }, [searchQuery]);

  return (
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
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="h-8 text-black relative bottom-28 md:bottom-36 lg:bottom-52"
        type="text"
        placeholder={t("searchPlaceholder")}
      />
    </div>
  );
};

export default Header;
