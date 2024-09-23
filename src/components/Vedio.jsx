import React from "react";
import { Link } from "react-router-dom";
import Time from "./Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const Vedio = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoID}`} className="mb-8 md:mb-16">
      {/* Video Thumbnail */}
      <div className="w-full h-48 sm:h-48 md:h-52 rounded-md relative hover:rounded-none duration-200 overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-xl hover:rounded-none duration-200"
          src={video?.thumbnails[0]?.url}
          alt="video-thumbnail"
        />
        {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
      </div>

      {/* Video Info */}
      <div className="flex gap-2 mt-2">
        {/* Avatar */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border shrink-0 border-black">
          <img
            className="w-full h-full object-cover hover:opacity-50"
            src={video?.author?.avatar[0]?.url}
            alt="author-avatar"
          />
        </div>

        {/* Video Title and Info */}
        <div className="flex flex-col w-full">
          {/* Video Title */}
          <span className="text-xs sm:text-sm font-semibold line-clamp-2">
            {video?.title}
          </span>

          {/* Author Info */}
          <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2 hover:text-black duration-200">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-gray-500" />
            )}
          </span>

          {/* Video Stats (Views and Publish Time) */}
          <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2">
            {`${abbreviateNumber(video?.stats?.views, 2)} views`}
            <span className="mx-1">•</span>
            {video?.publishedTimeText}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Vedio;
