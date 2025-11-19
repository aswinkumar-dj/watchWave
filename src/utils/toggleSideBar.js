import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useToggleSideBar = create(
  devtools((set) => ({
    isSideBarOpen: true,
    toggleSideBar: () =>
      set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
  }))
);

export default useToggleSideBar;
