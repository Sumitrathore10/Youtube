import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { IoFlagOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";

const Sidebarcp5 = () => {
    const data5 = [
        {
          id: 1,
          icon: <MdOutlineSettings className="text-xl" />,
          label: "Setting",
        },
        {
          id: 2,
          icon: <IoFlagOutline className="text-xl " />,
          label: "Report History",
        },
        {
          id: 3,
          icon: <IoMdHelpCircleOutline className="text-xl" />,
          label: "Help",
        },
        {
          id: 4,
          icon: <RiFeedbackLine className="text-xl " />,
          label: "Send feedback",
        },
      ];
  return (
    <div>
      <div>
        {data5.map((p, i) => {
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
    </div>
  )
}

export default Sidebarcp5
