import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FaSearch, FaTimes } from "react-icons/fa";
import Image from "next/image";

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

        <Image
          className="w-full h-48 md:h-64 lg:h-96 object-cover"
          src="/images/background-desktop.jpg"
          width={100}
          height={100}
          alt={t("headerPhoto")}
          priority
        />
      </picture>
      <div className="flex flex-row h-10 w-80 items-center relative bottom-28 md:bottom-36 lg:bottom-52 z-30 ">
        <FaSearch className="relative left-8 fill-black h-8 w-8" />
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="h-full w-full text-black border-solid border-2 border-black pl-9"
          type="text"
          placeholder={t("searchPlaceholder")}
        />
        <button
          onClick={() => setSearchQuery("")}
          type="button"
          className="relative right-7 h-7 w-7"
          style={{ display: searchQuery.length > 0 ? "block" : "none" }}
        >
          <FaTimes className="fill-black transition-all duration-300 ease w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default Header;
