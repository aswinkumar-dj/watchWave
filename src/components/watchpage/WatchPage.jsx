import { useEffect } from "react";
import useToggleSideBar from "../../utils/toggleSideBar";
import { useSearchParams } from "react-router-dom";
import { YT_API_KEY } from "../../utils/constants";
import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const closeSideBar = useToggleSideBar((state) => state.closeSideBar);

  const videoId = searchParams.get("v");

  useEffect(() => {
    closeSideBar();
  }, []);

  return (
    <div className="md:mx-20  mx-5 md:mb-5 mb-2 mt-18">
      <iframe
        width="900"
        height="500"
        className="rounded-xl"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <VideoDetails videoId={videoId} />
    </div>
  );
};

export default WatchPage;
