import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Row from "../components/Row";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { toast } from "tailwind-toast";
const MovieDetails = () => {
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const [movie, setMovie] = useState([]);
  const [display, setDisplay] = useState("none");
  const [fetchURL, setFetchURL] = useState("");
  const [playing, setPlaying] = useState(false);
  const [similar, setSimilar] = useState([]);
  const [vid, setVid] = useState("");
  const ref = useRef();
  const handleClick = () => {
    setDisplay("block");
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setPlaying(true);
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    const fetchMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=32b35a28d4d82d34584f147a9ecb560e&language=en-US`;
    axios.get(fetchMovie).then((res) => {
      setMovie(res.data);
    });
    setFetchURL(localStorage.getItem("fetchURL"));
    axios.get(fetchURL).then((res) => {
      const videos = res.data.results;
      if (res.data.results.length) {
        videos.map((item) => {
          if (item.type === "Trailer")
            setVid(`https://www.youtube.com/watch?v=${item.key}`);
        });
      }
    });
    if (localStorage.getItem("playing") == "true") {
      handleClick();
      localStorage.setItem("playing", false);
    }
    setSimilar(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=32b35a28d4d82d34584f147a9ecb560e&language=en-US`
    );
  }, [fetchURL, vid]);
  const saveShow = async () => {
    if (user?.email) {
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie?.poster_path,
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
          src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold">{movie?.title}</h1>
          <div className="ny-4 my-5">
            <button
              className="border bg-gray-300 text-black border-grey-300 py-2 px-5"
              onClick={handleClick}
            >
              Play
            </button>
            <button
              className="border text-white border-grey-300 py-2 px-5"
              onClick={saveShow}
            >
              Watch Later
            </button>
          </div>
          <p className="font-bold text-gray-200 text-[20px]">Release Date </p>
          <p className="w-full md:max-w-[70%] text-[18px] lg:max-w-[50%] xl:max-w-[55%] text-gray-400">
            {movie?.release_date}
          </p>
          <p className="pt-10 font-bold text-gray-200 text-[25px]">Synopsis</p>
          <p className="w-full md:max-w-[70%] text-[20px] lg:max-w-[50%] xl:max-w-[55%] text-gray-300">
            {movie?.overview}
          </p>
        </div>
      </div>
      <div className="p-20 pb-0" ref={ref}>
        <div
          className=" pt-[70.25%] ${display} relative"
          style={{ display: `${display}` }}
        >
          <ReactPlayer
            url={vid}
            playing={playing}
            autoPlay
            loop
            width="100%"
            height="80%"
            controls={true}
            ref={ref}
            // height={1960}
            // width="1080px"
            // height="1080px"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
      <div className="p-0 m-0 pb-20">
        <Row title="Similar Movies" fetchURL={similar} rowId="10" />
      </div>
    </div>
  );
};

export default MovieDetails;
