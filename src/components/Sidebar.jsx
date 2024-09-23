import React from "react";
import Sidebarcp1 from "./Sidebarcomponets/Sidebarcp1";
import Sidebarcp2 from "./Sidebarcomponets/Sidebarcp2";
import Sidebarcp3 from "./Sidebarcomponets/Sidebarcp3";
import Sidebarcp4 from "./Sidebarcomponets/Sidebarcp4";
import Sidebarcp5 from "./Sidebarcomponets/Sidebarcp5";
import Sidebarcp6 from "./Sidebarcomponets/Sidebarcp6";

const Sidebar = () => {
  return (
    <div className="hidden lg:block">
      <Sidebarcp1 />
      <hr className="border border-gray mt-2" />

      <Sidebarcp2 />
      <hr className="border border-gray mt-2" />

      <Sidebarcp3 />
      <hr className="border border-gray mt-2" />

      <Sidebarcp4 />
      <hr className="border border-gray mt-2" />

      <Sidebarcp5 />
      <hr className="border border-gray mt-2" />

      <Sidebarcp6 />
    </div>
  );
};

export default Sidebar;
