import React from "react";
import VideoContainer from "./VideoContainer";
import SearchContainer from "./SearchContainer";
import toogleSideBar from "../../utils/toggleSideBar";

const MainContainer = () => {
  const isOpen = toogleSideBar((state) => state.isSideBarOpen);
  return (
    <div className={`mr-8 mt-18 ${isOpen ? "ml-60" : "ml-0"}`}>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
