// utils
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Filter = {
  id: string;
  category: string;
  subcategory: string;
};

type State = {
  portfolioFilter: Filter;
  codeFilter: Filter;
  filterType: "portfolio" | "code";
};

type Actions = {
  setPortfolioFilter: (filter: Filter) => void;
  setCodeFilter: (filter: Filter) => void;
  setFilterType: (filterType: "portfolio" | "code") => void;
};

export const useFilterStore = create<State & Actions>()(
  persist(
    (set) => ({
      // state
      portfolioFilter: {
        id: "portfolio-filter-one",
        category: "all",
        subcategory: "portfolio",
      },
      codeFilter: {
        id: "code-filter-one",
        category: "all",
        subcategory: "code",
      },
      filterType: "portfolio",

      // actions
      setPortfolioFilter: (filter) => set({ portfolioFilter: filter }),
      setCodeFilter: (filter) => set({ codeFilter: filter }),
      setFilterType: (filterType) => set({ filterType }),
    }),
    { name: "byrnetommy-filter-store" }
  )
);
