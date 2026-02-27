import { Link } from "react-router-dom";
import "../App.css";
import facebook from "../images/facebook.svg";
import mail from "../images/mail.svg";
import call from "../images/call.svg";
import lock from "../images/lock.svg";
import visibiltyOff from "../images/visibility_off.svg";
import gmail from "../images/gmail.svg";
import landing from "../images/desktopLanding.jpg";

function Signup() {
  return (
    <div className="w-full font-inter">
      <div className=" lg:flex">
        <div className="hidden lg:block lg:w-1/2 relative ">
          <img src={landing} className="" alt="hero image" />
          <div className="absolute bg-[#FF7A18]/70 inset-0"></div>
          <div className="hidden lg:block absolute top-1/3 text-white text-center ">
            <h2 className="text-5xl font-bold leading-16">Chuks Kitchen</h2>
            <p className="text-2xl font-medium leading-9 w-3/5 m-auto px-3 pt-2">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
        <div className="py-8 w-full  lg:w-1/2 lg:pt-44">
          <h5 className="text-center text-[#FF7A18] font-island text-4xl ">
            Chuks Kitchen
          </h5>
          <h2 className="text-center text-2xl font-semibold">
            Create your Account
          </h2>

          <form className="pt-8 w-5/6 m-auto">
            <div className="relative">
              <label htmlFor="email" className=" font-medium text-sm">
                Email
              </label>
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="name@gmail.com"
                className="border block w-full pl-12 py-2 rounded-sm text-base"
              />
              <img
                src={mail}
                className="absolute top-3/5 left-1/12 lg:left-4"
                alt="mailLogo"
              />
            </div>
            <div className="relative py-4">
              <label htmlFor="email" className=" font-medium text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="call"
                id="call"
                placeholder="81234567890"
                className="border block w-full pl-12 py-2 rounded-sm text-base"
              />
              <img
                src={call}
                className="absolute top-[55%] left-1/12 lg:left-4"
                alt="mailLogo"
              />
            </div>
            <div className="relative py-4">
              <label htmlFor="password" className="font-medium text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="QWE123#"
                className="border block w-full pl-12 py-2 rounded-sm text-base"
              />
              <img
                src={lock}
                className="absolute top-1/2 left-1/12 lg:left-4 lg:top-13"
                alt="lock"
              />
              <img
                src={visibiltyOff}
                className="absolute top-7/12 right-1/12"
                alt="eye"
              />
            </div>
            <div className="relative py-4">
              <label htmlFor="password" className="font-medium text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="QWE123#"
                className="border block w-full pl-12 py-2 rounded-sm text-base"
              />
              <img
                src={lock}
                className="absolute top-1/2 left-1/12 lg:left-4 lg:top-13"
                alt="lock"
              />
            </div>
          </form>
          <div className=" w-5/6 m-auto">
            <div className="text-xs text-[#616161]">
              <input type="checkbox" name="" id="" className="" />I agree to the{" "}
              <div className="inline">
                <span className="text-blue-500">Terms & Conditions</span> and{" "}
                <span className="text-blue-500">Privacy Policy</span>
              </div>
            </div>
            <button className=" bg-[#ff7a18] w-full py-4 text-white font-semibold rounded-xl my-4">
              Continue
            </button>
            <div className="relative">
              <hr className="w-1/4  bg-[#F3F4F6] border-none h-0.5 absolute top-1/2" />
              <p className="text-center text-xs">Or continue with</p>
              <hr className="w-1/4 bg-[#F3F4F6] border-none h-0.5 absolute top-1/2 right-0" />
            </div>
            <button className="w-full font-roboto text-sm border-[#BDBDBD] border rounded-md py-4 my-4 flex justify-center">
              <img src={gmail} className=" pr-2 text-center" alt="" />
              Continue with Google
            </button>
            <button className="w-full font-roboto text-sm border-[#BDBDBD] border rounded-md py-4 my-4 flex justify-center">
              <img src={facebook} className="pr-3 text-center" alt="" />
              Continue with Facebook
            </button>
            <p className="text-center text-xs">
              Already have an account?
              <Link to="../Login">
                <span className="text-blue-500"> Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
