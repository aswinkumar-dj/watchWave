import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
