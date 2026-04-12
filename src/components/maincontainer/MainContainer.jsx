import React from "react";
import VideoContainer from "./VideoContainer";
import toogleSideBar from "../../utils/toggleSideBar";

const MainContainer = () => {
  const isOpen = toogleSideBar((state) => state.isSideBarOpen);
  return (
    <div
      className={`w-full px-3 pb-6 pt-18 transition-[padding] duration-300 sm:px-4 lg:px-6 xl:px-8 ${
        isOpen ? "md:pl-72" : ""
      }`}
    >
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
