import axios from "axios";
import movieDestructuring from "@/lib/mediaDestructuring";

export const apiURL = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const fetchPopularMedia = async (
  mediaType: "movie" | "tv",
  language: string
) => {
  try {
    const response = await apiURL.get(`${mediaType}/popular`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: language,
      },
    });

    return movieDestructuring(response.data.results, mediaType);
  } catch (error) {
    console.error("Error fetching popular media:", error);
    throw new Error("Failed to fetch popular media");
  }
};

export default fetchPopularMedia;
