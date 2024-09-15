import React from 'react'
import { HiOutlineFire } from "react-icons/hi2";
import { LuShoppingBag } from "react-icons/lu";
import { PiMusicNotesBold } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { SiStylelint } from "react-icons/si";
import { MdOutlinePodcasts } from "react-icons/md";

const Sidebarcp3 = () => {
    const data3 = [
        {
          id: 1,
          icon: <HiOutlineFire className="text-2xl" />,
          label: "Trending",
        },
        {
          id: 2,
          icon: <LuShoppingBag className="text-xl" />,
          label: "Shopping",
        },
        {
          id: 3,
          icon: <PiMusicNotesBold className="text-2xl " />,
          label: "Music",
        },
        {
          id: 4,
          icon: <BiMoviePlay className="text-2xl " />,
          label: "Movies",
        },
        {
          id: 5,
          icon: <CgMediaLive className="text-xl " />,
          label: "Live",
        },
        {
          id: 6,
          icon: <SiYoutubegaming className="text-xl " />,
          label: "Gaming",
        },
        {
          id: 7,
          icon: <MdNewspaper className="text-xl " />,
          label: "News",
        },
        {
          id: 8,
          icon: <IoTrophyOutline className="text-xl " />,
          label: "Sports",
        },
        {
          id: 9,
          icon: <IoBulbOutline className="text-xl " />,
          label: "Courses",
        },
        {
          id: 10,
          icon: <SiStylelint className="text-xl " />,
          label: "Fashion & Beauty",
        },
        {
          id: 11,
          icon: <MdOutlinePodcasts className="text-xl " />,
          label: "Podcast",
        },
      ];
  return (
    <div>
        <div className="flex space-x-3 items-center  py-2 px-4 w-[90%] bg-white mt-2 rounded-xl">
          <div className="text-md font-semibold">Explore</div>
        </div>
        {data3.map((p, i) => {
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

export default Sidebarcp3
