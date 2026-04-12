import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 top-0 z-40">
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
