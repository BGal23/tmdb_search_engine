import React from "react";
import Image from "next/image";
import { SectionProps } from "@/types/props";

const Section: React.FC<SectionProps> = ({ title, data }) => {
  return (
    <section className="container">
      <h2>{title}</h2>
      {data && (
        <ul>
          {data.map((movie) => (
            <li key={movie.id} style={{ marginBottom: "20px" }}>
              <h3>{movie.title}</h3>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width={500}
                height={281}
                priority
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Section;
