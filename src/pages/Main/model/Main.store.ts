import { create } from "zustand";
import { getVideos } from "../../../shared/styles/api/getVideos";
import { getVideosDetailByIds } from "../../../shared/styles/api/getVideosDetailByIds";
import { SearchItemData, SearchResultList } from "../../../shared/styles/types";

type Store = {
  data: SearchResultList | null;
  loading: boolean;
  error: boolean;
  fetchData: (query: string) => Promise<void>;
};

export const useMainStore = create<Store>((set) => ({
  data: null,
  loading: false,
  error: false,

  fetchData: async (query: string) => {
    try {
      set({ data: null, loading: true, error: false });
      const videos = await getVideos(query);
      const ids = videos.items.map((item: SearchItemData) => item.id.videoId);
      const videosDetail = await getVideosDetailByIds(ids);
      set({ data: videosDetail, loading: false });
    } catch {
      set({ loading: false, error: true });
    }
  },
}));
