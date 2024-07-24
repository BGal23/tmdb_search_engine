import axios from "axios";
import mediaDestructuring from "./mediaDestructuring";

export const fetchSearchedMedia = async (
  searchQuery: string,
  language: string
) => {
  try {
    const settings = {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: searchQuery,
        language: language,
      },
    };
    const [movieResponse, tvResponse] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/search/movie`, settings),
      axios.get(`https://api.themoviedb.org/3/search/tv`, settings),
    ]);

    const movie = mediaDestructuring(movieResponse.data.results, "movie");
    const tv = mediaDestructuring(tvResponse.data.results, "tv");

    let mergedResults = [];

    if (movie && tv) {
      let i = 0;
      let j = 0;

      while (i < movie.length && j < tv.length) {
        if (movie[i].popularity > tv[j].popularity) {
          mergedResults.push(movie[i]);
          i++;
        } else {
          mergedResults.push(tv[j]);
          j++;
        }
      }

      while (i < movie.length) {
        mergedResults.push(movie[i]);
        i++;
      }

      while (j < tv.length) {
        mergedResults.push(tv[j]);
        j++;
      }
    }

    return mergedResults;
  } catch (error) {
    console.error("Error fetching searched media:", error);
    throw new Error("Failed to fetch searched media");
  }
};
