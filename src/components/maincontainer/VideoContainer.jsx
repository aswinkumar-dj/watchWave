import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const result = await data.json();

    setVideos(result.items);
  };
  if (videos.length === 0) return null;
  return (
    <div>
      <VideoCard info={videos[1]} />
    </div>
  );
};

export default VideoContainer;
