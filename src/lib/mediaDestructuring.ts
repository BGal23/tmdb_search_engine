import { Movie, TVSeries } from "@/types/api";

const mediaDestructuring = (
  media: Movie[] | TVSeries[],
  type: "movie" | "tv"
) => {
  if (type === "movie") {
    return mapMovies(media as Movie[]);
  } else if (type === "tv") {
    return mapTVSeries(media as TVSeries[]);
  }
};

const mapMovies = (movies: Movie[]) => {
  return movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    releaseDate: movie.release_date,
    voteAverage: movie.vote_average,
    popularity: movie.popularity,
    isMovie: true,
  }));
};

const mapTVSeries = (tvSeries: TVSeries[]) => {
  return tvSeries.map((tv) => ({
    id: tv.id,
    title: tv.name,
    posterPath: tv.poster_path,
    releaseDate: tv.first_air_date,
    voteAverage: tv.vote_average,
    popularity: tv.popularity,
    isMovie: false,
  }));
};

export default mediaDestructuring;
