import { useEffect, useState } from "react";
import { formatNumber, YT_API_KEY } from "../../utils/constants";

const VideoDetails = ({ videoId }) => {
  const [subscribe, setSubscribe] = useState("Subscribe");
  const [videoData, setVideoData] = useState(null);
  const watchVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YT_API_KEY}`;
  useEffect(() => {
    let ignore = false;

    const loadVideo = async () => {
      const data = await fetch(watchVideoUrl);
      const result = await data.json();

      if (!ignore) {
        setVideoData(result);
      }
    };

    loadVideo();

    return () => {
      ignore = true;
    };
  }, [watchVideoUrl]);

  const video = videoData?.items?.[0];

  if (!video) return null;
  return (
    <div className="my-4 space-y-4 px-1 sm:px-0">
      <div>
        <h1 className="text-lg font-bold leading-snug text-white sm:text-2xl">
          {video.snippet?.title}
        </h1>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 sm:text-base">
        <p>
          📈 {formatNumber(videoData.items[0]?.statistics?.viewCount)} Views{" "}
        </p>
        <p>
          ♥️ {formatNumber(videoData.items[0]?.statistics?.likeCount)} Likes{" "}
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-black/30 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold sm:text-xl">
          👤 {videoData.items[0]?.snippet?.channelTitle}
        </p>
        <button
          className="w-full rounded-md bg-red-700 px-6 py-2 font-medium transition-colors duration-300 hover:bg-red-500 sm:w-auto"
          onClick={() => {
            setSubscribe((current) =>
              current === "Subscribe" ? "Subscribed!" : "Subscribe"
            );
          }}
        >
          {subscribe}
        </button>
      </div>
      <details className="collapse rounded-2xl bg-black/30">
        <summary className="collapse-title text-lg font-semibold sm:text-xl">
          ⬇️ Description
        </summary>
        <div className="collapse-content text-sm text-gray-400 sm:text-base">
          <p className="break-words whitespace-pre-wrap">
            {video.snippet?.description}
          </p>
        </div>
      </details>
    </div>
  );
};

export default VideoDetails;
