import React from 'react'
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { FaScissors } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Sidebarcp2 = () => {
    const data2 = [
        {
          id: 1,
          icon: <GrChannel className="text-xl" />,
          label: "Your Channel",
        },
        {
          id: 2,
          icon: <MdHistory className="text-xl" />,
          label: "History",
        },
        {
          id: 3,
          icon: <MdOutlinePlaylistPlay className="text-2xl " />,
          label: "Playlist",
        },
        {
          id: 4,
          icon: <MdOutlineOndemandVideo className="text-xl " />,
          label: "Youtube Videos",
        },
        {
          id: 5,
          icon: <MdOutlineWatchLater className="text-xl " />,
          label: "Watch Later",
        },
        {
          id: 6,
          icon: <BiLike className="text-xl " />,
          label: "Liked videos",
        },
        {
          id: 7,
          icon: <HiDownload className="text-xl " />,
          label: "Downloads",
        },
        {
          id: 8,
          icon: <FaScissors className="text-xl " />,
          label: "Your Clip",
        },
      ];
    
  return (
    <div>
    <div className="flex space-x-3 items-center  py-2 px-4 w-[90%] cursor-pointer bg-white mt-2 rounded-xl hover:bg-zinc-200">
      <div className="text-md font-semibold">You</div>
      <FaChevronRight className="text-sm font-light" />
    </div>
    {data2.map((p, i) => {
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

export default Sidebarcp2
