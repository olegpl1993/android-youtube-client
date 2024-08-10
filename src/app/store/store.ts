/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { getVideos } from "../../shared/styles/api/getVideos";
import { getVideosDetailByIds } from "../../shared/styles/api/getVideosDetailByIds";
import { SearchItemData, SearchResultList } from "../../shared/styles/types";

type Store = {
  videos: SearchResultList | null;
  loading: boolean;
  fetchVideos: (query: string) => Promise<void>;
};

export const useStore = create<Store>((set) => ({
  videos: null,
  loading: false,

  fetchVideos: async (query: string) => {
    try {
      set({ loading: true });
      const videos = await getVideos(query);
      const ids = videos.items.map((item: SearchItemData) => item.id.videoId);
      const videosDetail = await getVideosDetailByIds(ids);
      set({ videos: videosDetail, loading: false });
    } catch (error) {
      set({ videos: null, loading: false });
    }
  },
}));
