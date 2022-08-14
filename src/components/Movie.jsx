import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  return (
    <div
      className="relative h-36 min-w-[100px] cursor-pointer transition duration-200
        ease-out md:h-72 md:min-w-[190px] md:hover:scale-105"
    >
      {console.log(item)}
      <img
        // className="w-full h-auto block"
        src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
        layout="fill"
        className="rounded-sm object-cover h-full w-full block md:rounded"
      />
      <div className="absolute top-0 left-0 w-full h-[100%] hover:bg-black/40 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm fond-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
