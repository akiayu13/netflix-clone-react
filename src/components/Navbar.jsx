import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import profilePic from "../images/netflix-profile3.png";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          className="h-10 mr-5"
        />
      </Link>
      {user?.email ? (
        <div className="flex">
          <Link to="/account" className="flex">
            {/* <button className="text-white pr-2">Account</button> */}
            <img src={profilePic} className="w-10 flex mx-2 rounded"></img>
          </Link>
          <button
            onClick={handleLogout}
            className=" px-2 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
