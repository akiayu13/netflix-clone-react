import React, { useState } from "react";
import Section from "../components/Section";
import tvImage from "../images/tvImage.png";
import downloadMobile from "../images/downloadMobile.jpg";
import deviceStreaming from "../images/deviceStreaming.png";
import childrenCreateProfile from "../images/childrenCreateProfile.png";
import { useNavigate } from "react-router-dom";
import validator from "validator";
const LandingPage = () => {
  const [email, setEmail] = useState("");
  const router = useNavigate();
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setError("Email is invalid");
    } else {
      localStorage.setItem("registrationEmail", email);
      router("/signup/1");
    }
  };
  return (
    <>
      <div
        className="bg-fixed text-white bg-gradient-to-t from-black"
        style={{
          backgroundImage:
            "url(" +
            "https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" +
            ")",
        }}
      >
        {/* <div className="absolute w-full h-full bg-gradient-to-t from-black"></div> */}
        {/* <img
          className="object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        /> */}
        <div className="flex justify-center items-center backdrop-brightness-50 align-center flex-col w-full my-[150]px mx-auto">
          <h1 className=" pt-20 text-center w-[600px] m-auto text-bold text-[60px] ">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className=" text-[30px] ">Watch anywhere. Cancel anytime.</h2>
          <p className=" w-max text-[20px] pb-5 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {error && <p className="text-red-600 w-[60%] text-[23px]">{error}</p>}
          <form
            className="w-[60%] flex align-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="w-[70%] h-[70px] p-[20px] text-lg text-gray-800"
              placeholder="Email address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-[30%]  h-[70px] text-[22px] text-white cursor-pointer bg-red-700"
              type="submit"
            >
              Get Started &gt;
            </button>
          </form>

          <div className="mb-32"></div>
        </div>
      </div>
      <div>
        <Section
          contentleft
          videoUrl="https://www.youtube.com/watch?v=sY2djp46FeY"
          header="Enjoy on your TV."
          subheader="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more."
          image={tvImage}
          videoStyles={{ left: "82px", bottom: "382px" }}
        />
        <Section
          header="Download your shows to watch offline."
          subheader="Save your favourites easily and always have something to watch."
          image={downloadMobile}
        />
        <Section
          contentleft
          header="Watch everywhere."
          subheader="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image={deviceStreaming}
          videoUrl="https://www.youtube.com/watch?v=GV3HUDMQ-F8"
          videoStyles={{ left: "125px", bottom: "500px" }}
          imageHeight="550"
          imageWidth="750"
        />
        <Section
          header="Create profiles for children."
          subheader="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image={childrenCreateProfile}
          imageHeight="550"
          imageWidth="750"
        />
      </div>
    </>
  );
};

export default LandingPage;
