import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  // console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[88vh] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[90vh]  bg-gradient-to-r from-black"></div>
        <div className="absolute w-full h-[90vh]  bg-gradient-to-t from-[#101010]"></div>
        <img
          className="absolute top-0 left-0 h-[90vh] -z-10 w-screen object-cover"
          src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[30%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold">{movie?.title}</h1>
          <div className="ny-4 my-5">
            <button className="border bg-gray-300 text-black border-grey-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-grey-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
