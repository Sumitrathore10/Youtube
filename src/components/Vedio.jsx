import React from "react";
import { Link } from "react-router-dom";
import Time from "./Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const Vedio = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoID}`} className="mb-16">
      {/* Video Thumbnail */}
      <div className="w-30 h-48 md:h-56 rounded-md relative hover:rounded-none duration-200 overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-xl hover:rounded-none duration-200"
          src={video?.thumbnails[0]?.url}
          alt="video-thumbnail"
        />
        {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
      </div>

      {/* Video Info */}
      <div className="gap-2 flex mt-2">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border shrink-0 border-black">
          <img
            className="w-full h-full object-cover hover:opacity-50"
            src={video?.author?.avatar[0]?.url}
            alt="author-avatar"
          />
           <source src={video} type="video/mp4"></source>
        </div>

        {/* Video Title */}
        <div>
        <span className="text-sm font-semibold line-clamp-2">
          {video?.title}.
        </span>
        <span className="text-sm text-gray-500 flex items-center gap-2 hover:text-black duration-200">
          {video?.author?.title}
          {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
            <BsFillCheckCircleFill className="text-gray-500" />
          )}
        </span>
        <span className="text-sm flex items-center gap-2 realtive text-gray-500">{`${abbreviateNumber(
          video?.stats?.views,2
        )} views`}
        <span className="">*</span>
        <span className="text-sm  text-gray-500">{video?.publishedTimeText}</span>
        </span>
        
        </div>
        
      </div>
    </Link>
  );
};

export default Vedio;
