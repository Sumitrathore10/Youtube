import React from "react";
import Sidebar from "./Sidebar";
import Vedio from "./Vedio";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Vedio/>
    </div>
  );
};

export default Home;
