import { useEffect, useState } from "react";
import { YT_API_KEY } from "../../utils/constants";

const VideoDetails = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const watchVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YT_API_KEY}`;
  useEffect(() => {
    videoPlay();
  }, []);
  const videoPlay = async () => {
    const data = await fetch(watchVideoUrl);
    const result = await data.json();
    console.log(result);
    setVideoData(result);
  };
  if (!videoData) return null;
  return (
    <div className="w-225 h-200 my-4 borderr px-2 border-white">
      <h1 className="font-bold text-xl">
        {videoData.items[0]?.snippet?.title}
      </h1>
    </div>
  );
};

export default VideoDetails;
