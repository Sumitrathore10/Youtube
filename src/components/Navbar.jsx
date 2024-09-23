import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center fixed top-0 bg-white py-2 px-4 z-10">
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl cursor-pointer font-light rounded-full hover:bg-zinc-200 lg:hidden"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu />
          </button>
          <img src={Logo} alt="Logo" className="w-[8vw] h-auto cursor-pointer" />
        </div>

        <div className="flex items-center w-full max-w-[40%] md:max-w-[60%]">
          <input
            type="text"
            placeholder="Search"
            className="py-2 border border-gray-400 px-5 outline-none w-full rounded-l-full"
          />
          <button className="py-2.5 px-5 rounded-r-full border border-gray-400 bg-zinc-200 hover:bg-zinc-300">
            <CiSearch className="text-xl" />
          </button>
          <button className="text-xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full ml-2">
            <IoMdMic />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full">
            <RiVideoAddLine />
          </button>
          <button className="text-xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full">
            <GoBell />
          </button>
          <button className="text-xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full">
            <CgProfile />
          </button>
        </div>
      </div>

      {sidebarOpen && <Sidebar />} {/* Render sidebar based on state */}
    </>
  );
};

export default Navbar;
