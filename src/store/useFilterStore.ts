// utils
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  filter: string;
};

type Actions = {
  setFilter: (filter: string) => void;
};

export const useFilterStore = create<State & Actions>()(
  persist(
    (set) => ({
      // state
      filter: "all",

      // actions
      setFilter: (filter) => set({ filter }),
    }),
    { name: "byrnetommy-filter-store" }
  )
);
