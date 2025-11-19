import { useEffect } from "react";
import useToggleSideBar from "../../utils/toggleSideBar";
import { useSearchParams } from "react-router-dom";
import { YT_API_KEY } from "../../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const closeSideBar = useToggleSideBar((state) => state.closeSideBar);

  const videoId = searchParams.get("v");
  const watchVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YT_API_KEY}`;
  useEffect(() => {
    closeSideBar();
    videoPlay();
  }, []);
  const videoPlay = async () => {
    const data = await fetch(watchVideoUrl);
    const result = await data.json();
    console.log(result);
  };
  return (
    <div className="md:mx-20  mx-5 md:my-5 my-2">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
