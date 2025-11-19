import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="hover:bg-black/20 rounded-xl p-1 transition-colors duration-300">
      <div className="w-72 sm:w-64 md:w-72  m-2 cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-base-300">
        <img
          alt="thumbnail"
          src={thumbnails?.medium?.url}
          className="w-full object-cover"
        />

        <div className="p-3">
          <h3 className="font-semibold text-[15px] leading-tight line-clamp-2 text-white">
            {title}
          </h3>
          <h4 className="text-sm text-gray-600 mt-1">{channelTitle}</h4>

          <div className="text-xs text-gray-500 mt-1 space-x-1">
            {statistics?.viewCount && (
              <span>{Number(statistics.viewCount).toLocaleString()} views</span>
            )}
            {statistics?.likeCount && (
              <>
                <span>•</span>
                <span>
                  {Number(statistics.likeCount).toLocaleString()} likes
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
