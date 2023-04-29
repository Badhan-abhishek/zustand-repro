import { create } from "zustand";

import { persist } from "zustand/middleware";

type InitialState = {
  value: string;
  setValue: (value: string) => void;
  clearStore: () => void;
};

export const useValueStore = create<InitialState>()(
  persist(
    (set) => ({
      value: "",
      setValue: (value) =>
        set(() => ({
          value,
        })),
      clearStore() {
        set(
          () => ({
            value: "",
          }),
          true
        );
      },
    }),
    {
      name: "valuestore",
    }
  )
);
