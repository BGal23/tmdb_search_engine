import axios from "axios";
import { Movie, TVSeries } from "@/types/api";

export const fetchPopularMedia = async (media: string, language: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${media}/popular`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: language,
        },
      }
    );

    if (media === "movie") {
      const movies = response.data.results.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        isMovie: true,
      }));
      return movies;
    } else if (media === "tv") {
      const tvSeries = response.data.results.map((tv: TVSeries) => ({
        id: tv.id,
        title: tv.name,
        posterPath: tv.poster_path,
        releaseDate: tv.first_air_date,
        voteAverage: tv.vote_average,
        isMovie: false,
      }));
      return tvSeries;
    }
  } catch (error) {
    throw new Error("Failed to fetch popular movies");
  }
};
