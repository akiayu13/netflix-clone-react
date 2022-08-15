import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <>
      <h2 className="text-white w-80 text-lg font-bold md:text-[25px] p-4 px-8 ">
        {title}
      </h2>
      <div className="relative flex items-center group px-10">
        <ChevronLeftIcon
          className={`text-gray-100 w-12 left-10 right-0 absolute opacity-100 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((item, id) => (
            <>
              <Movie key={id} item={item} />
            </>
          ))}
        </div>
        <ChevronRightIcon
          className="text-gray-300 w-12 right-10 absolute opacity-100 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={() => handleClick("right")}
        />
      </div>
    </>
  );
};

export default Row;
