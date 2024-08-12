import { API_KEY, BASE_URL } from "../constants";

export const getVideos = async (query: string, pageToken?: string) => {
  try {
    const url = `${BASE_URL}search?part=snippet&q=${query}&type=video&maxResults=10&key=${API_KEY}&${pageToken ? `pageToken=${pageToken}` : ""}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
