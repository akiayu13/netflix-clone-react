import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import validator from "validator";

export default function Signup2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validator.isEmail(email)) {
        setError("Email is invalid");
      } else if (password.length < 8)
        setError("Password should be minimum 8 characters long");
      else {
        setError(null);
        await signUp(email, password);
        navigate("/home");
        localStorage.removeItem("registrationEmail");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const registrationEmail = localStorage.getItem("registrationEmail");
    if (localStorage.getItem("registrationEmail")) {
      setEmail(localStorage.getItem("registrationEmail"));
    }
  }, []);

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col w-40% h-full my-10 mx-auto text-left">
        <p className="my-4">
          STEP <b>2</b> OF <b>2</b>
        </p>
        <h3 className="text-2xl font-bold">
          Create a password to start your membership
        </h3>
        <p className="mb-4 text-lg">
          This is the last step and you're done! We hate paperwork, too.
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col ">
          {error ? <p className="text-red-400 my-1">{error}</p> : null}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 my-2 bg-white text-black px-4 py-3 text-lg border border-black"
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 my-2 w-full bg-white text-black border-gray-800 px-4 py-3 text-lg border border-black"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />

          <button className="cursor-pointer w-full bg-red-700 text-white border-0 px-4 py-3 text-lg">
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
  );
}
