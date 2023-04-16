import registrationStep1 from "../../images/registration-1.png";
import { Link } from "react-router-dom";

export default function Signup1() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col w-full max-w-xs mx-auto text-center">
        <img
          src={registrationStep1}
          alt="Registration Step 1"
          className="mx-auto mb-8 max-h-40"
        />
        <p className="mb-4">
          STEP <b>1</b> OF <b>2</b>
        </p>
        <h3 className="text-lg font-bold">Finish setting up your account</h3>
        <p className="my-4 text-sm">
          Netflix is personalized for you. Create a password to watch on any
          device at any time.
        </p>
        <Link to="/signup/2">
          <button className="cursor-pointer w-full bg-red-700 text-white border-0 py-3 text-lg">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
