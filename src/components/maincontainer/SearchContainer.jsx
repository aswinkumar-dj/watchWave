import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YT_API_KEY } from "../../utils/constants";
import VideoCard from "./VideoCard";

const SearchContainer = () => {
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    let ignore = false;

    const loadSearchVideos = async () => {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=46&q=legendfamily&key=" +
          YT_API_KEY
      );
      const result = await data.json();

      if (!ignore) {
        setSearchVideos(result.items);
      }
    };

    loadSearchVideos();

    return () => {
      ignore = true;
    };
  }, []);

  if (searchVideos.length === 0) {
    return (
      <div className="mx-auto max-w-[1600px] px-3 pb-6 pt-18 text-center text-lg text-gray-400 sm:px-4 lg:px-6 xl:px-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full px-3 pb-6 pt-18 sm:px-4 lg:px-6 xl:px-8">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {searchVideos
          .filter((v) => v.id.videoId)
          .map((searchVideo) => (
            <Link
              to={"/watch?v=" + searchVideo.id.videoId}
              key={searchVideo.id.videoId}
              className="min-w-0"
            >
              <VideoCard info={searchVideo} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchContainer;
