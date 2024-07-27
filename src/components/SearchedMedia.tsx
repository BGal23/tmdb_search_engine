"use client";

import { useMediaQuery } from "react-responsive";
import { SearchedProps } from "@/types/props";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SearchedMedia: React.FC<SearchedProps> = ({
  data,
  language,
  setIsSearchedMenuOpen,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation();

  return (
    <>
      <div
        onClick={() => setIsSearchedMenuOpen(false)}
        className="fixed w-full h-screen bg-black/70 top-0 left-0 z-20"
      ></div>
      <div className="absolute z-30 left-1/2 top-[10.5rem] md:top-52 lg:top-[17.5rem] min-w-80 md:w-[36rem] lg:w-[42rem] bg-black/90 transform -translate-x-1/2 border border-white/70 rounded-lg">
        {data.length === 0 ? (
          <div className="w-full h-8 text-center my-4">{t("cantFind")} :(</div>
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
                  href={`https://www.themoviedb.org/${
                    element.isMovie ? "movie" : "tv"
                  }/${element.id}?language=${language}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start md:items-center w-full"
                >
                  {!isMobile &&
                    (element.posterPath ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${element.posterPath}`}
                        alt={element.title}
                        width={128}
                        height={192}
                        priority
                      />
                    ) : (
                      <div className="block w-[128px] h-[192px] bg-white/40 flex items-center justify-center">
                        {element.isMovie ? (
                          <MdLocalMovies className="fill-white w-20 h-20" />
                        ) : (
                          <PiTelevisionSimpleFill className="fill-white w-20 h-20" />
                        )}
                      </div>
                    ))}

                  <h3 className="text-wrap md:text-center">{element.title}</h3>
                  <div className="flex flex-row gap-2 text-xs text-white/60">
                    <p>{element.releaseDate.slice(0, 4)}</p>
                    <p>{element.isMovie ? "Movie" : "TV Series"}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchedMedia;
