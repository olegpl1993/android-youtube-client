import { API_KEY, BASE_URL } from "../constants";

export const getVideosDetailByIds = async (videoIds: string[]) => {
  try {
    const stringIds = videoIds.join(",");
    const url = `${BASE_URL}videos?part=snippet,statistics&id=${stringIds}&key=${API_KEY}`;
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
