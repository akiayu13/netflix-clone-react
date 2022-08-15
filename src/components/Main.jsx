import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { toast, snackbar } from "tailwind-toast";
import { useNavigate } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import Snackbar from "tailwind-toast/classes/Snackbar";
const Main = () => {
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const handleClick = () => {
    localStorage.setItem("id", movie.id);
    localStorage.setItem("playing", true);
    localStorage.setItem(
      "fetchURL",
      `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=32b35a28d4d82d34584f147a9ecb560e&language=en-US)`
    );
    navigate("/nowWatching");
  };
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
  const saveShow = async (item) => {
    if (user?.email) {
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item?.poster_path,
        }),
      });
      toast()
        .default("", "Saved for later")
        .with({
          shape: "rounded-full",
          duration: 1500,
          speed: 100,
          positionX: "center",
          positionY: "bottom",
          color: "bg-black/50 text-white",
          fontTone: 200,
        })
        .show();
    } else {
      alert("Please log in to save a movie");
    }
  };
  return (
    <div className="w-full h-[88vh] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[90vh]  bg-gradient-to-r from-black"></div>
        <div className="absolute w-full h-[90vh]  bg-gradient-to-t from-[#101010]"></div>
        <img
          className="absolute top-0 left-0 h-[90vh] -z-10 w-screen object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[30%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold">{movie?.title}</h1>
          <div className="ny-4 my-5">
            <button
              className="border bg-gray-300 text-black border-grey-300 py-2 px-5"
              onClick={() => handleClick(movie)}
            >
              Play
            </button>
            <button
              className="border text-white border-grey-300 py-2 px-5"
              onClick={() => saveShow(movie)}
            >
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
