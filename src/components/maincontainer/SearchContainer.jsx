import React, { use, useEffect, useState } from "react";
import { YT_API_KEY } from "../../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchContainer = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  useEffect(() => {
    getSearchVideos();
  }, []);

  const getSearchVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=46&q=legendfamily&key=" +
        YT_API_KEY
    );
    const result = await data.json();
    console.log(result);
    setSearchVideos(result.items);
  };
  if (searchVideos.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap mx-8 mt-18">
      {searchVideos
        .filter((v) => v.id.videoId)
        .map((searchVideo) => (
          <Link
            to={"/watch?v=" + searchVideo.id.videoId}
            key={searchVideo.id.videoId}
          >
            <VideoCard info={searchVideo} />
          </Link>
        ))}
    </div>
  );
};

export default SearchContainer;
