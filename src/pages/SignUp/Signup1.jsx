import registrationStep1 from "../../images/registration-1.png";
import { Link } from "react-router-dom";
export default function Signup1() {
  return (
    <>
      <div className="bg-white h-full w-full py-10 align-middle overflow-hidden">
        <div className="flex flex-col w-[20%] h-full my-[125px] mx-auto text-center">
          <img src={registrationStep1} />
          <p className="m-[25px]">
            STEP <b>1</b> OF <b>2</b>
          </p>
          <h3 className="text-lg font-bold">Finish setting up your account</h3>
          <p className="m-[25px] text-[16px]">
            Nextflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <Link to="/signup/2">
            <button className="cusror-pointer w-[100%] bg-red-700 text-white border-0 px-[20px] py-[15px] text-lg">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
