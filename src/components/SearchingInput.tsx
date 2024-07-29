"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { FaSearch, FaTimes } from "react-icons/fa";
import debounce from "lodash/debounce";

const SearchingInput = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchQueryRef = useRef(searchQuery);

  useEffect(() => {
    if (typeof router.query.search === "string") {
      setSearchQuery(router.query.search);
    } else if (Array.isArray(router.query.search)) {
      setSearchQuery(router.query.search[0] || "");
    }
  }, [router.query.search]);

  const handleSearch = useCallback(
    debounce(() => {
      const query = searchQueryRef.current;
      if (query.length >= 3) {
        router.push(`/?search=${query}`);
      } else {
        router.push(`/`);
      }
    }, 300),
    []
  );

  useEffect(() => {
    searchQueryRef.current = searchQuery;
    handleSearch();
  }, [searchQuery, handleSearch]);

  return (
    <div className="flex flex-row h-10 items-center relative z-30">
      <FaSearch className="relative left-8 fill-black h-6 w-6" />
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="h-full w-52 md:w-80 lg:w-[25rem] text-black border-solid border-2 border-black pl-9"
        type="text"
        placeholder={t("searchPlaceholder")}
      />
      <div className="relative right-8 h-6 w-6">
        <button
          onClick={() => setSearchQuery("")}
          type="button"
          className="flex items-center h-full w-full"
          style={{ display: searchQuery.length > 0 ? "block" : "none" }}
        >
          <FaTimes className="fill-black w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default SearchingInput;
