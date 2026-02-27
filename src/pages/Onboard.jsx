import "../App.css";
import { Link } from "react-router-dom";

import fnk from "../images/fork n knife.svg";
import truck from "../images/truck.svg";
import desktopLanding from "../images/desktopLanding.jpg";
import mobileLanding from "../images/mobileLanding.jpg";

function Onboard() {
  return (
    <div
      className="box-border w-full pt-5 lg:pt-0 lg:my-0 font-inter text-base"
      id="top"
    >
      <div className="w-11/12 m-auto lg:flex lg:w-full">
        <div className=" lg:w-1/2 ">
          <img src={mobileLanding} className="lg:hidden" alt="hero image" />
          <img
            src={desktopLanding}
            className="hidden lg:block"
            alt="hero image"
          />
        </div>
        <div className=" lg:w-1/2 ">
          <div className="pt-5 lg:px-8 ">
            <Link to="../Login">
              <button className="cursor-pointer lg:order-2 text-blue-500 border-blue-500 border-2 rounded-xl py-2.5 px-7 font-semibold float-right lg:px-10">
                Login
              </button>
            </Link>
            <h5 className="pt-20 pb-2 text-center text-[#FF7A18] font-island text-4xl lg:float-left lg:pt-0 lg:pb-0 ">
              Chuks Kitchen
            </h5>
          </div>
          <div className="lg:mt-32 w-10/12 m-auto">
            <h1 className="font-bold text-[32px] leading-10 text-[#1F2937]">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="-tracking-wide py-2 lg:py-4">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            <ul className="font-medium lg:flex lg:justify-between lg:flex-wrap">
              <li className="rounded-lg bg-[#F3F4F6] py-2 flex items-center lg:bg-transparent lg:py-0">
                <img
                  src={fnk}
                  className="rounded-xl bg-[#FFE1C4] p-3.5 mx-3 lg:p-2.5 lg:mx-0 lg:mr-2"
                  alt="fork n knife image"
                />
                Freshly Prepared
              </li>
              <li className="rounded-lg bg-[#F3F4F6] py-2 flex items-center lg:bg-transparent my-3 lg:my-0">
                <img
                  src={fnk}
                  className="rounded-xl bg-[#FFE1C4] p-3.5 mx-3  lg:p-2.5 lg:mx-0  lg:mr-2"
                  alt="fork n knife image"
                />
                Support Local Business
              </li>
              <li className="rounded-lg bg-[#F3F4F6] py-2 flex items-center lg:bg-transparent">
                <img
                  src={truck}
                  className="rounded-xl bg-[#FFE1C4] p-3.5 mx-3  lg:p-2.5 lg:mx-0  lg:mr-2"
                  alt="truck image"
                />
                Fast & Reliable Delivery
              </li>
            </ul>
            <div className="text-center font-semibold py-12">
              <button className=" bg-[#ff7a18] w-full py-4 text-white rounded-xl mb-4">
                <a href="/">Start Your Order</a>
              </button>
              <button className="w-full text-blue-500 border-blue-500 border-2 rounded-xl py-4 ">
                <a href="/">Learn More About Us</a>
              </button>
            </div>
          </div>
          <hr className="w-4/5 m-auto mb-4 bg-[#F3F4F6] border-none h-0.5" />
          <ul className="hidden lg:flex lg:justify-between lg:w-3/4 m-auto text-sm leading-5 font-medium">
            <li className=" text-[#1F2937]">&copy; 2024 Chuks Kitchen.</li>
            <li className="text-blue-500">Privacy Policy</li>
            <li className="text-blue-500">Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Onboard;
