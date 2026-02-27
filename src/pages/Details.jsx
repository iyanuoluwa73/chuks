import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import close from "../images/close.svg";
import timer from "../images/timer.svg";
import order from "../images/order.jpg";

// import desktopLanding from "../images/desktopLanding.jpg";
import mobileLanding from "../images/mobileLanding.jpg";

function Details() {
  return (
    <div className="box-border w-full pt-5 lg:pt-0 lg:my-0 font-inter text-base">
      <Navbar />
      <div className="lg:flex lg:bg-[#F3F4F6]">
        <header className="m-auto lg:flex lg:w-[45%] lg:m-0">
          <div className=" lg:w-full ">
            <img src={mobileLanding} className="lg:hidden" alt="hero image" />
            <img src={order} className="hidden lg:block" alt="hero image" />
          </div>
        </header>
        <main className="w-full pt-7 px-3.5 lg:w-[55%] lg:bg-#F3F4F6 lg:pr-14 lg:pt-3.5 lg:pl-10">
          <div className="lg:bg-white lg:pt-7 lg:px-4">
            <div>
              <img src={close} className="float-right" alt="closebutton" />
              <h1 className="font-semibold text-2xl leading-8 pt-6 lg:font-bold lg:text-3xl">
                Jollof Rice with Fried Chicken
              </h1>
              <h2 className="font-semibold text-[#FF7A18] text-2xl pt-3 pb-2">
                ₦2,800
              </h2>
              <p className="pb-4 tracking-tight">
                Our signature Jollof rice, cooked to perfection with aromatic
                spices, served with juicy, golden-fried chicken. A classic
                Nigerian comfort food, rich in flavor and satisfying. Perfect
                for a quick lunch or a hearty dinner.
              </p>
              <ul className="flex justify-between flex-wrap text-[#4B5563] lg:items-center lg:mt-3.5">
                <li className="bg-[#F3F4F6] w-[45%] py-1 px-1.5 rounded-lg flex items-center justify-around lg:bg-white lg:w-1/5 lg:p-0">
                  <img src={timer} className="" alt="" />
                  <span>Mildly spicy</span>
                </li>
                <li className="bg-[#F3F4F6] text-[#1E88E5] w-1/2 py-1 px-1.5 rounded-lg  flex items-center justify-around lg:bg-white lg:w-[22%] lg:p-0">
                  <img src={timer} alt="" />
                  View Allergies
                </li>
                <li className="bg-[#F3F4F6] mt-3.5 w-3/4 py-1 px-1.5 rounded-lg flex items-center justify-around lg:bg-white lg:w-2/5 lg:p-0 lg:m-0">
                  <img src={timer} alt="" />
                  Vegeterian option available
                </li>
              </ul>
            </div>
            <div className="pt-6 pb-8">
              <h2 className="font-semibold text-2xl pb-5 lg:font-medium">
                Choose your protein
              </h2>
              <div>
                <div className="border border-[#BDBDBD] rounded-lg px-2.5 py-2">
                  <input
                    id="chicken"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-3 h-3 rounded-full focus:ring-4 focus:outline-none border border-default focus:ring-[#FF7A18] appearance-none"
                  />
                  <label htmlFor="chicken" className="pl-1">
                    Fried Chicken <span className="float-right">(Default)</span>
                  </label>
                </div>
                <div className="border border-[#BDBDBD] rounded-lg px-2.5 py-2 my-5">
                  <input
                    id="fish"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-3 h-3 rounded-full focus:ring-4 focus:outline-none border border-default focus:ring-[#FF7A18] appearance-none"
                  />
                  <label htmlFor="fish" className="pl-1">
                    Grilled Fish <span className="float-right">+₦500</span>
                  </label>
                </div>
                <div className="border border-[#BDBDBD] rounded-lg px-2.5 py-2">
                  <input
                    id="beef"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-3 h-3 rounded-full focus:ring-4 focus:outline-none border border-default focus:ring-[#FF7A18] appearance-none"
                  />
                  <label htmlFor="beef" className="pl-1">
                    Beef <span className="float-right">+₦700</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-8 lg:pt-3">
              <h2 className="font-medium text-2xl pb-5">
                Extra Sides (Optional)
              </h2>
              <div>
                <div className="border border-[#BDBDBD] rounded-lg px-2.5 py-2">
                  <input
                    id="chicken"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-3 h-3 rounded-full focus:ring-4 focus:outline-none border border-default focus:ring-[#FF7A18] appearance-none"
                  />
                  <label htmlFor="chicken" className="pl-1">
                    Fried Plantain <span className="float-right">+₦700</span>
                  </label>
                </div>
                <div className="border border-[#BDBDBD] rounded-lg px-2.5 py-2 my-5">
                  <input
                    id="fish"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-3 h-3 rounded-full focus:ring-4 focus:outline-none border border-default focus:ring-[#FF7A18] appearance-none"
                  />
                  <label htmlFor="fish" className="pl-1">
                    Coleslaw <span className="float-right">+₦500</span>
                  </label>
                </div>
                <div className="border border-[#BDBDBD] rounded-lg px-2.5 py-2">
                  <input
                    id="beef"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-3 h-3 rounded-full focus:ring-4 focus:outline-none border border-default focus:ring-[#FF7A18] appearance-none"
                  />
                  <label htmlFor="beef" className="pl-1">
                    Extra Pepper Sauce{" "}
                    <span className="float-right">+₦300</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-6 pb-8 lg:pt-3">
              <h2 className="font-medium text-2xl pb-5">
                Special Instructions
              </h2>
              <div className="">
                <textarea
                  name=""
                  id=""
                  rows={4}
                  className="border border-[#BDBDBD] w-full pt-2.5 px-2.5 placeholder-black"
                  placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
                ></textarea>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Details;
