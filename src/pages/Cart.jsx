import "../App.css";

import exploreJollofsmall from "../images/exploreJollofsmall.jpg";
import exploresemo from "../images/exploresemo.jpg";
import exploreSwallow from "../images/exploreSwallow.jpg";
import assorted from "../images/assorted.jpg";
import explorepoundo from "../images/explorepoundo.jpg";
import snail from "../images/snail.jpg";
import close from "../images/close.svg";
import jollof from "../images/jollof.jpg";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div className="w-full font-inter bg-[#F3F4F6]">
      <Navbar />
      <div className="text-[#1F2937]  pt-8 pb-20 w-11/12 m-auto ">
        <div className="flex justify-between bg-white p-1.5 rounded-lg border border-[#BDBDBD] lg:px-6 lg:py-2 lg:items-center lg:justify-between">
          <img src={exploreJollofsmall} className=" lg:hidden" alt="jollof" />
          <img src={jollof} className="hidden lg:block lg:w-1/6" alt="" />
          <div className="pl-2.5 ">
            <h3 className="font-semibold lg:font-bold lg:text-3xl">
              Jollof Rice & Fried Chicken
            </h3>
            <p className="text-xs py-1.5 lg:text-[#4B5563] lg:font-medium lg:text-2xl">
              With plantain and extra pepper sauce
            </p>
          </div>
          <div className="flex justify-between items-center my-1 lg:w-1/5 lg:justify-around">
            <span className="bg-[#BDBDBD] rounded-sm px-1">+</span>
            <span className="lg:font-medium lg:text-5xl">1</span>
            <span className="bg-[#BDBDBD] rounded-sm px-1">-</span>
          </div>
          <div className="flex items-center justify-between lg:w-1/5">
            <p className="text-[#ff7a18] font-medium lg:font-bold lg:text-3xl">
              ₦3,500
            </p>
            <img src={close} className="float-right" alt="closebutton" />
          </div>
        </div>
        <div className="flex justify-between bg-white p-1.5 rounded-lg border border-[#BDBDBD] my-2 lg:px-6 lg:py-2 lg:items-center lg:justify-between">
          <img src={exploreSwallow} className="lg:hidden" alt="jollof" />
          <img src={exploresemo} className="hidden lg:block lg:w-1/6" alt="" />
          <div className="pl-2.5">
            <h3 className="font-semibold lg:font-bold lg:text-3xl">
              Eba & Egusi Soup (Goat Meat)
            </h3>
            <p className="text-xs py-1.5 lg:font-medium lg:text-2xl ">
              Eba with Egusi soup and goat meat.
            </p>
          </div>
          <div className="flex justify-between items-center my-1 lg:w-1/5 lg:justify-around">
            <span className="bg-[#BDBDBD] rounded-sm px-1">+</span>
            <span className="lg:font-medium lg:text-5xl">1</span>
            <span className="bg-[#BDBDBD] rounded-sm px-1">-</span>
          </div>
          <div className="flex items-center justify-between lg:w-1/5">
            <p className="text-[#ff7a18] font-medium lg:font-bold lg:text-3xl">
              ₦3,500
            </p>
            <img src={close} className="float-right" alt="closebutton" />
          </div>
        </div>
        <div className="flex justify-between bg-white p-1.5 rounded-lg border border-[#BDBDBD] my-2 lg:px-6 lg:py-2 lg:items-center lg:justify-between">
          <img src={assorted} className="lg:hidden" alt="jollof" />
          <img
            src={explorepoundo}
            className="hidden lg:block lg:w-1/6"
            alt=""
          />
          <div className="pl-2.5">
            <h3 className="font-semibold lg:font-bold lg:text-3xl">
              Pounded Yam & Edikaikong
            </h3>
            <p className="text-xs py-1.5 lg:font-medium  lg:text-2xl">
              Pounded yam with rich Edikaikong soup.
            </p>
          </div>
          <div className="flex justify-between items-center my-1 lg:w-1/5 lg:justify-around">
            <span className="bg-[#BDBDBD] rounded-sm px-1">+</span>
            <span className="lg:font-medium lg:text-5xl">1</span>
            <span className="bg-[#BDBDBD] rounded-sm px-1">-</span>
          </div>
          <div className="flex items-center justify-between lg:w-1/5">
            <p className="text-[#ff7a18] font-medium lg:font-bold lg:text-3xl">
              ₦3,500
            </p>
            <img src={close} className="float-right" alt="closebutton" />
          </div>
        </div>
        <div className="flex justify-between bg-white p-1.5 rounded-lg border border-[#BDBDBD] my-2 lg:px-6 lg:py-2 lg:items-center lg:justify-between">
          <img src={snail} className="w-[35%] lg:hidden" alt="jollof" />
          <img src={snail} className="hidden lg:block lg:w-1/6" alt="" />
          <div className="pl-2.5">
            <h3 className="font-semibold lg:font-bold lg:text-3xl">
              Peppered Snail
            </h3>
            <p className="text-xs py-1.5 lg:font-medium  lg:text-2xl">
              Spicy and savory peppered snail.
            </p>
          </div>
          <div className="flex justify-between items-center my-1 lg:w-1/5 lg:justify-around">
            <span className="bg-[#BDBDBD] rounded-sm px-1">+</span>
            <span className="lg:font-medium lg:text-5xl">1</span>
            <span className="bg-[#BDBDBD] rounded-sm px-1">-</span>
          </div>
          <div className="flex items-center justify-between lg:w-1/5">
            <p className="text-[#ff7a18] font-medium lg:font-bold lg:text-3xl">
              ₦3,500
            </p>
            <img src={close} className="float-right" alt="closebutton" />
          </div>
        </div>

        <p className="text-[#1E88E5] text-center">
          <a href="/Explore">+ Add more items from Chuks Kitchen</a>
        </p>
      </div>
    </div>
  );
}

export default Cart;
