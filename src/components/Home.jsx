import React from "react";
import Sidebar from "./Sidebar";
import Vedio from "./Vedio";
import { useData } from "../context/Context";

const Home = () => {
  const { data } = useData();
  return (
    <div className="flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[20%] flex flex-col mt-16 h-[calc(100vh-4rem)] overflow-y-hidden hover:overflow-y-scroll scrollbar overflow-x-hidden py-2 px-3">
        <Sidebar />
      </div>
      
      {/* Video Section */}
      <div className='h-[calc(100vh-4rem)] pt-[5%] mt-16 pb-3 px-[3%] w-[80%] overflow-y-scroll overflow-x-hidden'>
        <div className="grid justify-center grid-cols-3 gap-4"> {/* Grid layout for 3 columns */}
          {data.map((i) => {
            if (i.type === "video") {
              return <Vedio key={i.id} video={i?.video} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

