import React from "react";
import { formatNumber } from "../../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="hover:bg-black/20 rounded-xl p-1 transition-colors duration-300">
      <div className="w-72 sm:w-64 md:w-98  m-2 cursor-pointer  overflow-hidden ">
        <img
          alt="thumbnail"
          src={thumbnails?.medium?.url}
          className="w-full object-cover rounded-xl"
        />

        <div className="p-3">
          <h3 className="font-semibold text-[15px] leading-tight line-clamp-2 text-white">
            {title}
          </h3>
          <h4 className="text-sm text-gray-400 mt-1 hover:text-white transition-colors duration-300">
            {channelTitle}
          </h4>

          <div className="text-xs text-gray-400 mt-2 space-x-4">
            {statistics?.viewCount && (
              <span>{formatNumber(statistics.viewCount)} views</span>
            )}
            {statistics?.likeCount && (
              <>
                <span>♥️{formatNumber(statistics.likeCount)} likes</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
