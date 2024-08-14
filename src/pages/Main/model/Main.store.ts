import { create } from "zustand";
import { getVideos } from "../../../shared/api/getVideos";
import { getVideosDetailByIds } from "../../../shared/api/getVideosDetailByIds";
import { SearchItemData, SearchResultList } from "../../../shared/types";

type Store = {
  data: SearchResultList | null;
  loading: boolean;
  error: boolean;
  nextPageToken: string | null;
  prevPageToken: string | null;
  sorting: string;
  filter: string;
  search: string;
  fetchData: (query: string, pageToken?: string) => Promise<void>;
  setSorting: (sorting: string) => void;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
};

export const useMainStore = create<Store>((set) => ({
  data: null,
  loading: false,
  error: false,
  nextPageToken: null,
  prevPageToken: null,
  sorting: "date",
  filter: "",
  search: "",

  fetchData: async (query: string, pageToken?: string) => {
    try {
      set({ data: null, loading: true, error: false });
      const videos = await getVideos(query, pageToken);
      set({
        nextPageToken: videos.nextPageToken || null,
        prevPageToken: videos.prevPageToken || null,
      });
      const ids = videos.items.map((item: SearchItemData) => item.id.videoId);
      const videosDetail = await getVideosDetailByIds(ids);
      set({ data: videosDetail, loading: false });
    } catch {
      set({ loading: false, error: true });
    }
  },

  setSorting: (sorting: string) => set({ sorting }),
  setFilter: (filter: string) => set({ filter }),
  setSearch: (search: string) => set({ search }),
}));
