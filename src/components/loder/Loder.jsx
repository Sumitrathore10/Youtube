import React from "react";

const Loder = () => {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen">
        <div class="loader-ring relative w-16 h-16 border-4 border-black border-opacity-25 rounded-full">
          <div class="loader-slab absolute top-0 left-0 w-full h-full border-4 border-t-black border-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loder;
