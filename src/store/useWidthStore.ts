// utils
import { create } from "zustand";
import { persist } from "zustand/middleware";

// types
type State = {
  width: number;
};

type Actions = {
  setWidth: (width: number) => void;
};

export const useWidthStore = create<State & Actions>()(
  persist(
    (set) => ({
      // state
      width: 0,

      // actions
      setWidth: (width) => {
        if (width > 0) {
          set({ width });
        }
      },
    }),
    { name: "byrnetommy-width-store" }
  )
);
