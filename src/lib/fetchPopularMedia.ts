import axios from "axios";
import movieDestructuring from "@/lib/mediaDestructuring";

export const fetchPopularMedia = async (
  mediaType: "movie" | "tv",
  language: string
) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/popular`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: language,
        },
      }
    );

    return movieDestructuring(response.data.results, mediaType);
  } catch (error) {
    throw new Error("Failed to fetch popular media");
  }
};
