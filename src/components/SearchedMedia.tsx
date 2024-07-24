import { SearchedProps } from "@/types/props";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const SearchedMedia: React.FC<SearchedProps> = ({ data, language }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="absolute z-30 left-1/2 top-[10.5rem] md:top-52 lg:top-[17.5rem] w-80 md:w-[40rem] lg:w-[52rem] bg-black/90 transform -translate-x-1/2 border border-white/70 rounded-lg">
      <ul className="md:flex md:flex-wrap">
        {data.map((element) => (
          <li
            className="flex flex-row items-center m-1 p-1 rounded-sm transition-all duration-500 ease hover:bg-white/10"
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
              {!isMobile && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${element.posterPath}`}
                  alt={element.title}
                  width={100}
                  height={140}
                  priority
                  style={{ width: "auto", height: "100%" }}
                />
              )}
              <h3 className="text-wrap">{element.title}</h3>
              <div className="flex flex-row gap-2 text-xs text-white/60">
                <p>{element.releaseDate.slice(0, 4)}</p>
                <p>{element.isMovie ? "Movie" : "TV Series"}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedMedia;
