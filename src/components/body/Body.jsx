import SideBar from "./SideBar";
import MainContainer from "../maincontainer/MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
