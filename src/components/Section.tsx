"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ISectionProps } from "@/types/props";
import { useTranslation } from "next-i18next";
import sectionSettings from "@/lib/sectionSettings";
import { mainUrl, photoUrl } from "./SearchedMedia";

const Section: React.FC<ISectionProps> = ({
  title,
  data,
  language,
  anchor,
}) => {
  const { t } = useTranslation("common");
  const sliderRef = useRef<Slider | null>(null);
  const [isSliderActive, setIsSliderActive] = useState<boolean>(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isSliderActive && sliderRef.current) {
        event.preventDefault();
        if (event.deltaY > 0) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isSliderActive]);

  return (
    <section
      id={anchor}
      className="container scroll-mt-16 md:scroll-mt-18 lg:scroll-mt-20"
    >
      <div className="bg-gradient-section-name rounded-l-md">
        <h2 className="text-3xl my-4 ml-4 py-2">{t(title)}</h2>
      </div>
      <div
        className="w-full px-6"
        onMouseEnter={() => setIsSliderActive(true)}
        onMouseLeave={() => setIsSliderActive(false)}
      >
        {data && (
          <Slider {...sectionSettings} ref={sliderRef}>
            {data.map((media) => (
              <div
                key={media.id}
                className="movie-slide p-2 transition-all duration-500 ease hover:scale-[1.02]"
              >
                <a
                  href={`${mainUrl}/${media.isMovie ? "movie" : "tv"}/${
                    media.id
                  }?language=${t("language")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <div className="relative w-[240px] min-[400px]:w-[280px] md:w-[200px] lg:w-[270px] xl:w-[250px] 2xl:w-[300px] h-[360px] min-[400px]:h-[450px] md:h-[300px] lg:h-[390px] xl:h-[380px] 2xl:h-[450px]">
                    <Image
                      src={`${photoUrl}w342${media.posterPath}`}
                      alt={media.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      priority
                      className="rounded-md object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-center">
                    {media.title}
                  </h3>
                  <p>
                    {t("rating")}: {media.voteAverage.toFixed(1)}
                  </p>
                  <p>
                    {t("releaseDate")}:{" "}
                    {media.releaseDate.split("-").reverse().join(".")}
                  </p>
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
