import Image from "next/image";
import Slider from "react-slick";
import { SectionProps } from "@/types/props";

const Section: React.FC<SectionProps> = ({ title, data, language, anchor }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const webLanguage = language === "en" ? "en" : "pl";

  return (
    <section id={anchor} className="container">
      <div className="bg-gradient-section-name rounded-l-md">
        <h2 className="text-3xl my-4 ml-4 py-2">{title}</h2>
      </div>
      <div className="w-full px-6">
        {data && (
          <Slider {...settings}>
            {data.map((media) => (
              <div
                key={media.id}
                className="movie-slide p-2 transition-all duration-500 ease hover:scale-[1.02]"
              >
                <a
                  href={`https://www.themoviedb.org/${
                    media.isMovie ? "movie" : "tv"
                  }/${media.id}?language=${webLanguage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${media.posterPath}`}
                    alt={media.title}
                    width={500}
                    height={750}
                    priority
                    className="rounded-md"
                  />
                  <h3>{media.title}</h3>
                  <p>Ocena: {media.voteAverage.toFixed(1)}</p>
                  <p>Data wydania: {media.releaseDate}</p>
                </a>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Section;
