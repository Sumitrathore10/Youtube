import React from "react";
import Sidebarcp1 from "./Sidebarcomponets/Sidebarcp1";
import Sidebarcp2 from "./Sidebarcomponets/Sidebarcp2";
import Sidebarcp3 from "./Sidebarcomponets/Sidebarcp3";
import Sidebarcp4 from "./Sidebarcomponets/Sidebarcp4";
import Sidebarcp5 from "./Sidebarcomponets/Sidebarcp5";
import Sidebarcp6 from "./Sidebarcomponets/Sidebarcp6";

const Sidebar = () => {
  
  return (
    <div className="w-[20%] flex flex-col mt-16  h-[calc(100vh-4rem)] overflow-y-hidden  hover:overflow-y-scroll scrollbar overflow-x-hidden py-2 px-3">
      {/* Sidebar part 1 */}

     <Sidebarcp1/>

      <hr className="border border-gray mt-2" />

      {/* Sidebar part 2 */}

     <Sidebarcp2/>

      <hr className="border border-gray mt-2" />

      {/* sidebar part 3*/}

      <Sidebarcp3 />
      <hr className="border border-gray mt-2" />

      {/* sidebar part 4 */}

      <Sidebarcp4/>

      <hr className="border border-gray mt-2" />

      {/* Sidebar part 5 */}

      <Sidebarcp5/>
      <hr className="border border-gray mt-2" />

      {/* Sidebar part 6 */}

      <Sidebarcp6/>

    </div>
  );
};

export default Sidebar;
