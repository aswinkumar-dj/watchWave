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
  }, [closeSideBar]);

  return (
    <div className="w-full px-3 pb-6 pt-18 sm:px-4 lg:px-6 xl:px-10">
      {/* LEFT COLUMN — VIDEO + DETAILS */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <VideoDetails videoId={videoId} />
          <CommentsContainer />
        </div>

        <aside className="min-w-0 xl:sticky xl:top-20 xl:self-start">
          <LiveChat />
        </aside>
      </div>

      {/* RIGHT COLUMN — LIVE CHAT */}
    </div>
  );
};

export default WatchPage;
