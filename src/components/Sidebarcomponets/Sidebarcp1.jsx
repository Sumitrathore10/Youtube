import React from 'react'
import { SlHome } from "react-icons/sl";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";

const Sidebarcp1 = () => {
    const data = [
        {
          id: 1,
          icon: <SlHome className="text-xl " />,
          label: "Home",
        },
        {
          id: 2,
          icon: <SiYoutubeshorts className="text-xl" />,
          label: "Shorts",
        },
        {
          id: 3,
          icon: <MdOutlineSubscriptions className="text-xl text- " />,
          label: "Subscriptions",
        },
        {
          id: 4,
          icon: (
            <a
              href="https://music.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutubemusic
                href="https://music.youtube.com/"
                className="text-xl "
              />
            </a>
          ),
          label: (
            <a
              href="https://music.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube Music
            </a>
          ),
        },
      ];
  return (
    
    <div>
    {data.map((p, i) => {
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

export default Sidebarcp1
