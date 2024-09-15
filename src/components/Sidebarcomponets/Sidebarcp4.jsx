import React from 'react'
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";

const Sidebarcp4 = () => {
    const data4 = [
        {
          id: 1,
          icon: <SiYoutubestudio className="text-xl  text-red-600 " />,
          label: "Youtube Studio",
        },
        {
          id: 2,
          icon: <SiYoutubemusic className="text-xl  text-red-600 " />,
          label: "Youtube Music",
        },
        {
          id: 3,
          icon: <SiYoutubekids className="text-xl text-red-600 " />,
          label: "Youtube Kids",
        },
      ];
    
  return (
    <div>
        <div className="flex space-x-3 items-center  py-2 px-4 w-[90%] bg-white mt-2 rounded-xl">
          <div className="text-md font-semibold">More from YouTube</div>
        </div>
        {data4.map((p, i) => {
          return (
            <div
              key={i}
              className="flex py-2 px-4 w-[90%] cursor-pointer items-center space-x-6 bg-white mt-2 rounded-xl hover:bg-zinc-200 "
            >
              {p.icon}
              <p className="text-md">{p.label}</p>
            </div>
          );
        })}
      </div>
  )
}

export default Sidebarcp4
