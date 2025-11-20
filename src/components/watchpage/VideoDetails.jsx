import { useEffect, useState } from "react";
import { formatNumber, YT_API_KEY } from "../../utils/constants";

const VideoDetails = ({ videoId }) => {
  const [subscribe, setSubscribe] = useState("Subscribe");
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
    <div className="w-225 my-4 borderr px-2 border-white space-y-4">
      <div>
        <h1 className="font-bold text-xl">
          {videoData.items[0]?.snippet?.title}
        </h1>
      </div>
      <div className="flex space-x-6 text-lg text-gray-400 ">
        <p>
          📈 {formatNumber(videoData.items[0]?.statistics?.viewCount)} Views{" "}
        </p>
        <p>
          ♥️ {formatNumber(videoData.items[0]?.statistics?.likeCount)} Likes{" "}
        </p>
      </div>
      <div className="mt-8 bg-black/30 p-4 rounded-lg  flex justify-between items-center">
        <p className="text-xl font-semibold">
          👤 {videoData.items[0]?.snippet?.channelTitle}
        </p>
        <button
          className="bg-red-700 p-1 px-6 rounded-md hover:bg-red-500 transition-colors duration-500"
          onClick={() => {
            subscribe === "Subscribe"
              ? setSubscribe("Subscribed!")
              : setSubscribe("Subscribe");
          }}
        >
          {subscribe}
        </button>
      </div>
      <details className="collapse bg-black/30">
        <summary className="collapse-title text-xl font-semibold">
          ⬇️ Description
        </summary>
        <div className="collapse-content text-sm ">
          <p className="whitespace-pre-wrap wrap-break-word">
            {videoData.items[0]?.snippet?.description}
          </p>
        </div>
      </details>
    </div>
  );
};

export default VideoDetails;
