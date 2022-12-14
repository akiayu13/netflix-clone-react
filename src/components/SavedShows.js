import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      // console.log(doc.data());
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  // console.log(movieRef);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (item) => {
    const id = item.id;
    localStorage.setItem("id", id);
    localStorage.setItem(
      "fetchURL",
      `https://api.themoviedb.org/3/movie/${item?.id}/videos?api_key=32b35a28d4d82d34584f147a9ecb560e&language=en-US)`
    );

    window.open("/nowWatching", "_blank");
  };

  return (
    <>
      <h2 className="text-gray-200 font-bold md:text-[25px] p-8 pt-10 pb-5">
        My Shows
      </h2>
      <div className="relative flex items-center group px-8 pb-32">
        <ChevronLeftIcon
          onClick={slideLeft}
          className="text-gray-300 w-12 left-10 right-0 absolute opacity-100 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item) => (
            <div
              key={item.id}
              className="w-[240px] h-72 sm:w-[200px] md:w-[240px] lg:w-[190px] inline-block relative p-2 md:hover:scale-105 ease-out cursor-pointer transition duration-200"
            >
              <img
                className="w-full h-full object-cover block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-[#101010]/60 opacity-0 hover:opacity-100 text-white">
                <p
                  className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
                  onClick={() => handleClick(item)}
                >
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <ChevronRightIcon
          onClick={slideRight}
          className="text-gray-300 w-12 right-10 absolute opacity-100 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
