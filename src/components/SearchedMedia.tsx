"use client";

import { ISearchedProps } from "@/types/props";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export const mainUrl = "https://www.themoviedb.org/";
export const photoUrl = "https://image.tmdb.org/t/p/";

const SearchedMedia: React.FC<ISearchedProps> = ({
  data,
  language,
  searchQuery,
  isSearchedMenuOpen,
  setIsSearchedMenuOpen,
}) => {
  const { t } = useTranslation("common");

  const maxMobileScreenWidth = 767;
  const isMobile: boolean = useMediaQuery({ maxWidth: maxMobileScreenWidth });

  useEffect(() => {
    if (searchQuery.length >= 3) {
      setIsSearchedMenuOpen(true);
    } else {
      setIsSearchedMenuOpen(false);
    }
  }, [searchQuery, setIsSearchedMenuOpen]);

  return (
    <>
      <div
        onClick={() => setIsSearchedMenuOpen(false)}
        className="fixed w-full h-screen top-0 left-0 z-20 transition-opacity duration-300 ease"
        style={{
          background: "#000000B3",
          opacity: isSearchedMenuOpen ? 1 : 0,
          visibility: isSearchedMenuOpen ? "visible" : "hidden",
        }}
      ></div>
      {isSearchedMenuOpen && (
        <div className="absolute z-30 left-1/2 top-40 md:top-52 lg:top-[16.5rem] min-w-80 md:w-[36rem] lg:w-[45.5rem] bg-black/90 transform -translate-x-1/2 border border-white/70 rounded-lg mb-4">
          {data.length === 0 ? (
            <div className=" text-center m-4">{t("cantFind")} :(</div>
          ) : (
            <ul
              className="md:flex md:flex-wrap md:grid-cols-4 lg:grid-cols-5"
              style={{
                display: data.length >= 4 ? "grid" : undefined,
              }}
            >
              {data.map((element) => (
                <li
                  className="flex flex-row items-start md:max-w-[9.4rem] m-1 p-1 rounded-sm transition-all duration-500 ease hover:bg-white/10 hover:scale-[1.02]"
                  key={element.id}
                >
                  <a
                    href={`${mainUrl}${element.isMovie ? "movie" : "tv"}/${
                      element.id
                    }?language=${t("language")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start md:items-center w-full"
                  >
                    <div className="hidden md:block">
                      {element.posterPath && !isMobile ? ( // only downloads photos if it's not a mobile version
                        <div className="relative w-[128px] h-[192px]">
                          <Image
                            src={`${photoUrl}w154${element.posterPath}`}
                            alt={element.title}
                            fill
                            priority
                            sizes="128px"
                          />
                        </div>
                      ) : (
                        <div className="block w-[128px] h-[192px] bg-white/40 flex items-center justify-center">
                          {element.isMovie ? (
                            <MdLocalMovies className="fill-white w-20 h-20" />
                          ) : (
                            <PiTelevisionSimpleFill className="fill-white w-20 h-20" />
                          )}
                        </div>
                      )}
                    </div>

                    <h3 className="text-wrap md:text-center">
                      {element.title}
                    </h3>
                    <div className="flex flex-row gap-2 text-xs text-white/60">
                      <p>{element.releaseDate.slice(0, 4)}</p>
                      <p>{element.isMovie ? t("movie") : t("tvSeries")}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default SearchedMedia;
