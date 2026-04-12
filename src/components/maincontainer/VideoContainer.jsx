import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const result = await data.json();

    setVideos(result.items);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getVideos();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (videos.length === 0) {
    return (
      <div className="mx-auto max-w-[1600px] py-12 text-center text-lg text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id} className="min-w-0">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
