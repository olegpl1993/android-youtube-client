import { create } from "zustand";
import { getVideosDetailByIds } from "../../../shared/styles/api/getVideosDetailByIds";
import { SearchResultList } from "../../../shared/styles/types";

type Store = {
  data: SearchResultList | null;
  loading: boolean;
  error: boolean;
  fetchData: (query: string) => Promise<void>;
};

export const useDetailsStore = create<Store>((set) => ({
  data: null,
  loading: false,
  error: false,

  fetchData: async (id: string) => {
    try {
      set({ data: null, loading: true, error: false });
      const videosDetail = await getVideosDetailByIds([id]);
      set({ data: videosDetail, loading: false });
    } catch {
      set({ loading: false, error: true });
    }
  },
}));
