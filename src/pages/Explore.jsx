import "../App.css";
import React from "react";
import Navbar from "../components/Navbar";
import PopularFood from "../components/PopularFood";
import ExJollofData from "../components/ExJollofData";
import SwallowData from "../components/SwallowData";

import mobileLanding from "../images/mobile landing.jpg";
import explorebiglanding from "../images/explorebiglanding.jpg";
import exploreJollofsmall from "../images/exploreJollofsmall.jpg";
import exploreSwallow from "../images/exploreSwallow.jpg";
import assorted from "../images/assorted.jpg";
import jollof from "../images/jollof.jpg";
import explorepoundo from "../images/explorepoundo.jpg";
import snail from "../images/snail.jpg";
import fish from "../images/fish.jpg";
import ricenfish from "../images/ricenfish.jpg";
import amalangbegs from "../images/amalangbegs.png";
import fufunokra from "../images/fufunokra.png";

function Explore() {
  const popularFoodData = [
    {
      id: 1,
      image: exploreJollofsmall,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "3,500",
    },
    {
      id: 2,
      image: exploreSwallow,
      title: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "3,500",
    },
    {
      id: 3,
      image: assorted,
      title: "Pounded Yam & Edikaikong",
      description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: "3,500",
    },
    {
      id: 4,
      image: snail,
      title: "Peppered Snail",
      description: "Spicy and savory peppered snail, perfect as a starter.",
      price: "3,500",
    },
    {
      id: 5,
      image: fish,
      title: "Grilled Tilapia Fish",
      description: "Whole grilled tilapia seasoned with our special spices.",
      price: "3,500",
    },
    {
      id: 6,
      image: explorepoundo,
      title: "Pounded Yam & Edikaikong",
      description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: "3,500",
    },
  ];

  const jollofData = [
    {
      id: 1,
      image: jollof,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "3,500",
    },
    {
      id: 2,
      image: ricenfish,
      title: "Jollof Rice & Smoked Fish",
      description: "Flavorful jollof rice served with perfectly smoked fish.",
      price: "3,500",
    },
    {
      id: 3,
      image: jollof,
      title: "Party Jollof Rice (Veg)",
      description: "Vegetarian party jollof, full of rich flavors.",
      price: "3,500",
    },
  ];

  const swallowsData = [
    {
      id: 1,
      image: amalangbegs,
      title: "Amala with Gbegiri & Ewedu",
      description:
        "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      price: "3,500",
    },
    {
      id: 2,
      image: fufunokra,
      title: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: "3,500",
    },
    {
      id: 3,
      image: fufunokra,
      title: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: "3,500",
    },
  ];

  return (
    <div className="box-border w-full text-[#1F2937]">
      <Navbar />

      <header className="relative">
        <img
          src={mobileLanding}
          className="lg:hidden"
          alt="mobile home food image"
        />
        <img
          src={explorebiglanding}
          className="hidden lg:block"
          alt="desktop home food image"
        />
        <div className="absolute bg-[#0000004D] inset-0 lg:bg-[#00000073]"></div>
        <div className="absolute top-1/3 text-white pl-2 font-inter lg:w-3/5 lg:pl-12">
          <h1 className="text-3xl font-bold leading-10 lg:text-5xl lg:leading-16">
            Chuks Kitchen
          </h1>
          <p className="text-base font-medium py-4 lg:text-2xl lg:leading-8 lg:py-2.5">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </header>

      <div className="absolute -bottom-110 w-full py-6 pl-4 bg-white lg:bg-[#F3F4F6] lg:static lg:m-auto lg:pt-20 lg:pb-10">
        <div className="lg:m-auto lg:w-11/12 lg:bg-white lg:p-2.5 lg:pl-6">
          <h3 className="block font-semibold text-2xl leading-8 pb-4">
            Menu Categories
          </h3>
          <ul className="text-2xl leading-8  w-full">
            <li className="bg-[#FFE1C4] border-l-[#FF7A18] border-l-4">
              <a href="#popular">Popular</a>
            </li>
            <li className="active:bg-[#ffe1c4] active:border-l-[#FF7A18] active:border-l-4 py-4">
              <a href="#jollof">Jollof rice & Entrees</a>
            </li>
            <li className="active:bg-[#ffe1c4] active:border-l-[#FF7A18] active:border-l-4">
              <a href="#swallow">Swallow & Soups</a>
            </li>
            <li className="active:bg-[#ffe1c4] active:border-l-[#FF7A18] active:border-l-4 py-4">
              <a href="#">Grills & Sides</a>
            </li>
            <li className="active:bg-[#ffe1c4] active:border-l-[#FF7A18] active:border-l-4">
              <a href="#">Beverages</a>
            </li>
            <li className="active:bg-[#ffe1c4] active:border-l-[#FF7A18] active:border-l-4 pt-4">
              <a href="#">Dessert</a>
            </li>
          </ul>
        </div>
      </div>
      <main className="w-full bg-[#F3F4F6] pt-40 lg:pb-24">
        <div className="w-11/12 m-auto " id="popular">
          <h2 className="font-semibold pb-1 lg:font-bold lg:text-3xl lg:pb-0">
            Popular
          </h2>
          <div className="lg:flex lg:justify-between lg:flex-wrap">
            {popularFoodData.map((popular) => (
              <PopularFood
                key={popular.id}
                image={popular.image}
                title={popular.title}
                description={popular.description}
                price={popular.price}
              />
            ))}
          </div>
          <a
            href="#"
            className="tracking-tight text-[#1E88E5] text-center block pt-5 lg:hidden"
          >
            View All Categories
          </a>
        </div>
        <div className="w-11/12 m-auto pt-12" id="jollof">
          <h2 className="font-semibold pb-1 lg:font-bold lg:text-3xl lg:pb-5">
            Jollof Rice & Entrees
          </h2>
          <div className="lg:flex lg:justify-between lg:flex-wrap">
            {jollofData.map((jollof) => (
              <ExJollofData
                key={jollof.id}
                image={jollof.image}
                title={jollof.title}
                description={jollof.description}
                price={jollof.price}
              />
            ))}
            {/* <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0">
              <img
                src={exploreJollofsmall}
                className="lg:hidden"
                alt="jollof"
              />
              <img src={jollof} className="hidden lg:block" alt="" />
              <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
                <h3 className="font-semibold lg:text-2xl lg:leading-8">
                  Jollof Rice & Fried Chicken
                </h3>
                <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
                  Our signature Jollof rice, served with crispy fried chicken
                  and plantain.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff7a18] font-medium">₦3,500</p>
                  <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0">
              <img src={exploreSwallow} className="lg:hidden" alt="jollof" />
              <img src={ricenfish} className="hidden lg:block" alt="" />
              <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
                <h3 className="font-semibold lg:text-2xl lg:leading-8">
                  Jollof Rice & Smoked Fish
                </h3>
                <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
                  Flavorful jollof rice served with perfectly smoked fish.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff7a18] font-medium">₦3,500</p>
                  <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0">
              <img src={assorted} className="lg:hidden" alt="jollof" />
              <img src={jollof} className="hidden lg:block" alt="" />
              <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
                <h3 className="font-semibold lg:text-2xl lg:leading-8">
                  Jollof Rice & Fried Chicken
                </h3>
                <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
                  Our signature Jollof rice, served with crispy fried chicken
                  and plantain.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff7a18] font-medium">₦3,500</p>
                  <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <a
            href="#"
            className="tracking-tight text-[#1E88E5] text-center block pt-5 lg:hidden"
          >
            View All Categories
          </a>
        </div>

        <div className="w-11/12 m-auto pt-12 pb-6" id="swallow">
          <h2 className="font-semibold pb-1 lg:font-bold lg:text-3xl lg:pb-5">
            Swallows & Soup
          </h2>
          <div className="lg:flex lg:justify-between lg:flex-wrap">
            {swallowsData.map((swallow) => (
              <SwallowData
                key={swallow.id}
                image={swallow.image}
                title={swallow.title}
                description={swallow.description}
                price={swallow.price}
              />
            ))}
            {/* <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0">
              <img
                src={exploreJollofsmall}
                className="lg:hidden"
                alt="jollof"
              />
              <img src={amalangbegs} className="hidden lg:block" alt="" />
              <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
                <h3 className="font-semibold lg:text-2xl lg:leading-8">
                  Amala with Gbegiri & Ewedu
                </h3>
                <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
                  Classic Amala served with Gbegiri (beans) and Ewedu (jute
                  leaf) soup.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff7a18] font-medium">₦3,500</p>
                  <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0">
              <img src={exploreSwallow} className="lg:hidden" alt="jollof" />
              <img src={fufunokra} className="hidden lg:block" alt="" />
              <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
                <h3 className="font-semibold lg:text-2xl lg:leading-8">
                  Fufu & Okra Soup (Fish)
                </h3>
                <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
                  Light Fufu served with fresh okra soup and tilapia fish.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff7a18] font-medium">₦3,500</p>
                  <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0">
              <img src={assorted} className="lg:hidden" alt="jollof" />
              <img src={semo} className="hidden lg:block" alt="" />
              <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
                <h3 className="font-semibold lg:text-2xl lg:leading-8">
                  Fufu & Okra Soup (Fish)
                </h3>
                <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
                  Light Fufu served with fresh okra soup and tilapia fish.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#ff7a18] font-medium">₦3,500</p>
                  <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <a
            href="#"
            className="tracking-tight text-[#1E88E5] text-center block pt-5 lg:hidden"
          >
            View All Categories
          </a>
        </div>
      </main>
    </div>
  );
}

export default Explore;
