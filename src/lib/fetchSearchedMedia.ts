import mediaDestructuring from "./mediaDestructuring";
import { apiURL } from "./fetchPopularMedia";
import mergedResults from "./mergedResults";

const fetchSearchedMedia = async (searchQuery: string, language: string) => {
  try {
    const settings = {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: searchQuery,
        language: language,
      },
    };
    const [movieResponse, tvResponse] = await Promise.all([
      apiURL.get(`search/movie`, settings),
      apiURL.get(`search/tv`, settings),
    ]);

    const movie = mediaDestructuring(movieResponse.data.results, "movie");
    const tv = mediaDestructuring(tvResponse.data.results, "tv");

    if (movie && tv) {
      return mergedResults(movie, tv).splice(0, 20);
    }
  } catch (error) {
    console.error("Error fetching searched media:", error);
    throw new Error("Failed to fetch searched media");
  }
};

export default fetchSearchedMedia;
