import { create } from "zustand";

const useToggleSideBar = create((set) => ({
  isSideBarOpen: true,
  toggleSideBar: () =>
    set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));

export default useToggleSideBar;
