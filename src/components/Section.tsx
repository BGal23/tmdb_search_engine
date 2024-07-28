import Image from "next/image";
import Slider from "react-slick";
import { SectionProps } from "@/types/props";

const Section: React.FC<SectionProps> = ({ title, data, language, anchor }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
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
                  className="flex flex-col items-center"
                >
                  <div className="relative w-[342px] md:w-[200px] lg:w-[270px] xl:w-[250px] 2xl:w-[300px] h-[503px] md:h-[300px] lg:h-[390px] xl:h-[380px] 2xl:h-[450px]">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${media.posterPath}`}
                      alt={media.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      priority
                      className="rounded-md object-cover"
                    />
                  </div>

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
