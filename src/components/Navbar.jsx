import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    // navbar-part-1

    <div className="w-full flex justify-between items-center fixed top-0 bg-white py-2 px-4 z-10">
      <div className=" flex items-center space-x-7 ">
        <button className="text-2xl cursor-pointer font-light rounded-full hover:bg-zinc-200 py-2 px-3">
          <RxHamburgerMenu  />
        </button>
        <img src={Logo} alt="Logo" className="w-[8vw] cursor-pointer " />
      </div>

      {/* // navbar-part-2 */}

      <div className=" flex items-center w-[35%]">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            className="py-2 font-sans border border-r-0 border-gray-400 px-5 outline-none w-full rounded-l-full"
          />
        </div>
        <button className="py-2 px-5 rounded-r-full border  border-gray-400 ">
          <CiSearch className="text-2xl cursor-pointer" />
        </button>
        <button className="text-2xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full ml-[4%]">
          <IoMdMic />
        </button>
      </div>
      
      {/* navbar-part-3 */}

      <div className="flex items-center justify-center space-x-6">
        <button className="text-2xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full ml-[4%]">
          <RiVideoAddLine />
        </button>
        <button className="text-2xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full ml-[4%]">
          <GoBell />
        </button>
        <button className="text-2xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 p-2 rounded-full ml-[4%]">
          <CgProfile />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
