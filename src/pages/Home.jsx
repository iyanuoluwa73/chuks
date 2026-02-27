import "../App.css";
import React from "react";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";

import mobileLanding from "../images/mobile landing.jpg";
import desktopLanding from "../images/desktop landing.jpg";
import search from "../images/icon.svg";
import jollof from "../images/jollof.jpg";
import jollofBig from "../images/jollofBig.jpg";
import ricePlantain from "../images/rice n plantain.jpg";
import swallow from "../images/swallow.jpg";
import swallowBig from "../images/swallowBig.jpg";
import semo from "../images/semo.jpg";
import grill from "../images/suya.jpg";
import grillBig from "../images/grillBig.jpg";
import snacks from "../images/snacks.jpg";
import tilapia from "../images/tilapia.jpg";
import beans from "../images/beans.png";

function Home() {
  const foodData = [
    {
      id: 1,
      image: jollof,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "3,500",
    },
    {
      id: 2,
      image: tilapia,
      title: "Spicy Tilapia Pepper Soup",
      description:
        "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: "3,500",
    },
    {
      id: 3,
      image: jollof,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "3,500",
    },
    {
      id: 4,
      image: snacks,
      title: "Sweet Treats",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken..",
      price: "3,500",
    },
    {
      id: 5,
      image: ricePlantain,
      title: "Jollof Rice & Smoked Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken..",
      price: "3,500",
    },
    {
      id: 6,
      image: semo,
      title: "Egusi Soup & Pounded Yam",
      description:
        "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "3,500",
    },
  ];

  return (
    <div className="box-border w-full">
      <Navbar />
      <header className="relative">
        <img
          src={mobileLanding}
          className="lg:hidden"
          alt="mobile home food image"
        />
        <img
          src={desktopLanding}
          className="hidden lg:block"
          alt="desktop home food image"
        />
        <div className="absolute bg-[#0000004D] inset-0 lg:bg-[#00000073]"></div>
        <div className="absolute top-1/3 text-white pl-2 font-inter lg:w-3/5 lg:pl-16">
          <h1 className="text-3xl font-bold leading-10 lg:font-bold lg:text-5xl lg:leading-16">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="text-base font-medium py-4 lg:font-bold lg:text-3xl lg:leading-10 lg:py-8">
            Handcrafted with passion, delivered with care.
          </p>
          <button className=" bg-[#ff7a18] py-3 px-7 text-white rounded-xl font-semibold text-base lg:leading-6">
            Discover what's new
          </button>
        </div>

        <div className="absolute -bottom-5 w-full ">
          <div className="w-11/12 m-auto lg:w-9/12">
            <input
              type="text"
              placeholder="What are you craving for today?"
              className=" bg-white tracking-tight text-[#1F2937] rounded-lg pl-11 py-2 w-full drop-shadow-[#0000001F] drop-shadow-lg lg:py-3 lg:pl-16 lg:font-semibold lg:text-2xl"
              name="question"
              id="question"
            />
            <img
              src={search}
              className="absolute top-3 left-8 lg:left-48 lg:top-5"
              alt="searchicon"
            />
          </div>
        </div>
      </header>
      <main className="pt-24 m-auto text-center bg-[#F3F4F6]">
        <h2 className="font-semibold text-2xl pb-8 text-[#1F2937] lg:font-bold lg:text-3xl lg:pb-12">
          Popular Categories
        </h2>
        <div className="w-11/12 m-auto lg:flex lg:justify-between lg:flex-wrap text-[#1F2937]">
          <div className="rounded-xl bg-white lg:w-[29%]">
            <img src={jollof} className="lg:hidden" alt="jollof" />
            <img src={jollofBig} className="hidden lg:block" alt="" />
            <h5 className="py-3 font-medium text-sm lg:font-semibold lg:text-2xl lg:pt-12 lg:pb-20">
              Jollof Delights
            </h5>
          </div>
          <div className="rounded-xl bg-white my-6 lg:w-[29%] lg:my-0 ">
            <img src={swallow} className="lg:hidden" alt="swallow" />
            <img
              src={swallowBig}
              className="hidden lg:block"
              alt="swallowBig"
            />
            <h5 className="py-3 font-medium text-sm lg:font-semibold lg:text-2xl lg:pt-12 lg:pb-20">
              Swallow & Soups
            </h5>
          </div>
          <div className="rounded-xl bg-white mb-4  lg:w-[29%] lg:mb-0">
            <img src={grill} className="lg:hidden" alt="grill" />
            <img src={grillBig} className="hidden lg:block" alt="grillBig" />
            <h5 className="py-3 font-medium text-sm lg:font-semibold lg:text-2xl lg:pt-12 lg:pb-20">
              Grills & BBQ
            </h5>
          </div>
          <div className="rounded-xl bg-white hidden lg:block mt-12 lg:w-[29%]">
            <img src={snacks} className="hidden lg:block" alt="snacks" />
            <h5 className="py-3 font-medium text-sm lg:font-semibold lg:text-2xl lg:pt-12 lg:pb-20">
              Sweet Treats
            </h5>
          </div>
          <div className="rounded-xl bg-white hidden lg:block mt-12 lg:w-[29%]">
            <img src={jollof} className="lg:hidden" alt="jollof" />
            <img src={jollofBig} className="hidden lg:block" alt="" />
            <h5 className="py-3 font-medium text-sm lg:font-semibold lg:text-2xl lg:pt-12 lg:pb-20">
              Jollof Delights
            </h5>
          </div>
          <div className="rounded-xl bg-white hidden lg:block mt-12 lg:w-[29%]">
            <img src={swallow} className="lg:hidden" alt="swallow" />
            <img
              src={swallowBig}
              className="hidden lg:block"
              alt="swallowBig"
            />
            <h5 className="py-3 font-medium text-sm lg:font-semibold lg:text-2xl lg:pt-12 lg:pb-20">
              Swallow & Soups
            </h5>
          </div>
        </div>
        <a href="#" className="tracking-tight text-[#1E88E5] lg:hidden">
          View All Categories
        </a>
      </main>
      <div className="pt-24 pb-24 m-auto text-center bg-[#F3F4F6]">
        <h2 className="font-semibold text-2xl pb-8 text-[#1F2937] lg:font-bold lg:text-3xl lg:pb-12">
          Chef's Specials
        </h2>
        <div className="w-11/12 pb-4 m-auto lg:flex lg:justify-between lg:flex-wrap text-[#1F2937]">
          {foodData.map((food) => (
            <FoodCard
              key={food.id}
              image={food.image}
              title={food.title}
              description={food.description}
              price={food.price}
            />
          ))}
        </div>
        <a href="#" className="tracking-tight text-[#1E88E5] lg:hidden">
          View All Specials
        </a>
      </div>
      <div className="relative text-white w-full">
        <img
          src={mobileLanding}
          className="lg:hidden"
          alt="mobile home food image"
        />
        <img src={beans} className="hidden lg:block" alt="beans" />
        <div className="absolute bg-[#1D1D1D73] inset-0 lg:bg-[#00000073]"></div>
        <div className="absolute top-0 pt-44 px-4 lg:px-12">
          <h2 className="font-bold text-3xl leading-10 lg:font-extrabold lg:text-5xl">
            Introducing Our New Menu Additions!
          </h2>
          <p className="font-semibold text-xl leading-7 py-2.5 lg:text-2xl lg:leading-8 lg:w-1/2 lg:py-5">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button className=" bg-[#ff7a18] py-3.5 px-8 text-white rounded-xl font-semibold text-base">
            Discover what's new
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
