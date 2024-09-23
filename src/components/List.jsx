import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const List = () => {
  const scrollRef = useRef(null);

  const items = [
    "All",
    "Live",
    "React",
    "Cricket",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Comedy",
    "Sports",
    "Technology",
    "Education",
    "Trending",
    "Podcasts",
    "Fitness",
    "Science",
    "Travel",
    "Lifestyle"
  ];

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-between space-x-2 sm:space-x-4 md:space-x-6 mb-6">
      {/* Left Arrow */}
      <MdChevronLeft
        className="cursor-pointer bg-[#e7e4e4] hover:bg-[#cecece] rounded-full p-1 sm:p-2 md:p-3 text-3xl sm:text-4xl md:text-5xl"
        onClick={() => scroll(-200)}
      />

      {/* List Container */}
      <div
        className="flex space-x-2 sm:space-x-3 md:space-x-4 overflow-x-scroll hide-scrollbar lg:w-[90%] sm:w-[85%] md:w-[80%]"
        ref={scrollRef}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="px-3 sm:px-4 md:px-5 py-1 cursor-pointer bg-[#e7e4e4] font-semibold text-sm sm:text-base md:text-lg lg:text-xl duration-300 hover:bg-[#cecece] rounded-lg whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <MdChevronRight
        className="cursor-pointer bg-[#e7e4e4] hover:bg-[#cecece] rounded-full p-1 sm:p-2 md:p-3 text-3xl sm:text-4xl md:text-5xl"
        onClick={() => scroll(200)}
      />
    </div>
  );
};

export default List;
