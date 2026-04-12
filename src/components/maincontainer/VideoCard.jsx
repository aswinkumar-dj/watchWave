import React from "react";
import { formatNumber } from "../../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <article className="h-full overflow-hidden rounded-2xl border border-white/5 bg-black/10 p-2 transition-colors duration-300 hover:bg-black/20">
      <div className="cursor-pointer overflow-hidden">
        <img
          alt="thumbnail"
          src={thumbnails?.medium?.url}
          className="aspect-video w-full rounded-xl object-cover"
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
              
                <span>♥️{formatNumber(statistics.likeCount)} likes</span>
              
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
