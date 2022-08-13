import registrationStep1 from "../../images/registration-1.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import validator from "validator";
export default function Signup2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(validator.isEmail(email));

    try {
      if (!validator.isEmail(email)) {
        setError("Email is invalid");
      } else {
        setError(null);
        await signUp(email, password);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("registrationEmail")) {
      setEmail(localStorage.getItem("registrationEmail"));
    }
  }, []);
  return (
    <>
      <div className="bg-white h-full w-full py-10 align-middle overflow-hidden">
        <div className="flex flex-col w-[40%] h-full my-[100px] mx-auto text-left">
          {/* <img src={registrationStep1} /> */}
          <p className="my-[20px]">
            STEP <b>2</b> OF <b>2</b>
          </p>
          <h3 className="text-[23px] font-bold">
            Create a password to start your membership
          </h3>
          <p className="mb-[20px] text-[20px]">
            This is the last step and you're done! We hate paperwork, too.
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col ">
            {error ? <p className="text-red-400 my-1">{error}</p> : null}
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-white text-black px-[20px] py-[15px] text-lg"
              style={{ border: "1px solid black" }}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 w-[100%] bg-white text-black border-gray-800 px-[20px] py-[15px] text-lg"
              style={{ border: "1px solid black" }}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <button className="cusror-pointer w-[100%] bg-red-700 text-white border-0 px-[20px] py-[15px] text-lg">
              Next
            </button>

            <p className="py-2">
              <span className="text-gray-600">
                Already subscribed to Netflix?
              </span>{" "}
              <Link to="/login" className="text-red-600">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
