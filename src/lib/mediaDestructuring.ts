import { IMovieApi, ITVSeriesApi } from "@/types/api";

const mediaDestructuring = (
  media: IMovieApi[] | ITVSeriesApi[],
  type: "movie" | "tv"
) => {
  if (type === "movie") {
    return mapMovies(media as IMovieApi[]);
  } else if (type === "tv") {
    return mapTVSeries(media as ITVSeriesApi[]);
  }
};

const mapMovies = (movies: IMovieApi[]) => {
  return movies.map(
    ({ id, title, poster_path, release_date, vote_average, popularity }) => ({
      id,
      title,
      posterPath: poster_path,
      releaseDate: release_date,
      voteAverage: vote_average,
      popularity,
      isMovie: true,
    })
  );
};

const mapTVSeries = (tvSeries: ITVSeriesApi[]) => {
  return tvSeries.map(
    ({ id, name, poster_path, first_air_date, vote_average, popularity }) => ({
      id,
      title: name,
      posterPath: poster_path,
      releaseDate: first_air_date,
      voteAverage: vote_average,
      popularity,
      isMovie: false,
    })
  );
};

export default mediaDestructuring;
