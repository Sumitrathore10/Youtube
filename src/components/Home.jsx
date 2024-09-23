import React from "react";
import Sidebar from "./Sidebar";
import Vedio from "./Vedio";
import { useData } from "../context/Context";
import List from "./List";

const Home = () => {
  const { data, loading } = useData();

  return (
    <div className="flex">
      <div className="hidden lg:block w-[20%] flex-col mt-16 h-[calc(100vh-4rem)] overflow-y-hidden hover:overflow-y-scroll scrollbar overflow-x-hidden py-2 px-3">
        <Sidebar />
      </div>

      <div className="w-full lg:w-[80%] h-[calc(100vh-4rem)] mt-16 pb-3 px-[3%] overflow-y-scroll overflow-x-hidden">
        <List />
        <div className="grid justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4" >
          
          {!loading && data.map((i) => {
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
