import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Sidebarcp6 = () => {
  return (
    <div className="px-1 text-sm font-bold text-gray-500">
     <div className="px-3 mt-2">
     <span className="">
        About <span className="px-1"></span> Press
        <span className="px-1"></span> Copyright <br />
        Contact us <span className="px-1"></span> Creators <br />
        Advertise <span className="px-1"></span> Devlopers
      </span>
     </div>
     <br />
      <div className="px-3">
      <span>
        Terms Privacy Policy & Safety <br /> How Youtube works <br />
        Test new features
      </span>
      </div>
      <div className="p-3 text-xs font-light">
      <span className="flex items-center space-x-1">
      < AiOutlineCopyrightCircle /> 
      <p>2024 Goggle LLC</p>
      </span>
      </div>
    </div>
  );
};

export default Sidebarcp6;
