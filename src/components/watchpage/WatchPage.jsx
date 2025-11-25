import { useEffect } from "react";
import useToggleSideBar from "../../utils/toggleSideBar";
import { useSearchParams } from "react-router-dom";
import VideoDetails from "./VideoDetails";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const closeSideBar = useToggleSideBar((state) => state.closeSideBar);

  const videoId = searchParams.get("v");

  useEffect(() => {
    closeSideBar();
  }, []);

  return (
    <div className="flex w-full">
      {/* LEFT COLUMN — VIDEO + DETAILS */}
      <div className="flex flex-col md:w-[59%] w-full md:ml-20  md:mt-18">
        <iframe
          width="100%"
          height="500"
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <VideoDetails videoId={videoId} />
        <CommentsContainer />
      </div>

      {/* RIGHT COLUMN — LIVE CHAT */}
      <div className="hidden md:block md:w-[30%] p-4 mt-14.5">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
