import { Link } from "react-router-dom";

import arrow from "../images/arrow-up.png";

function Footer() {
  return (
    <footer className="hidden w-full lg:block bg-[#62412e] pt-16 px-20 text-white">
      <div className="flex justify-between">
        <div className="w-1/5">
          <h5 className=" text-[#FF7A18] font-island text-4xl">
            Chuks Kitchen
          </h5>
          <p className="text-2xl leading-9 pr-2">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        <div className="w-1/5 font-poppins text-xs leading-5">
          <h5 className="text-2xl font-jost leading-9">Quick Links</h5>
          <ul className="">
            <li className="font-medium active:text-[#ff7a18] pr-40">
              <Link to="/">Home</Link>
            </li>
            <li className="font-medium pr-40 hover:text-[#ff7a18]">
              <Link to="../Explore">Explore</Link>
            </li>
            <li className="font-medium pr-40 hover:text-[#ff7a18]">
              <Link to="../Cart">My Orders</Link>
            </li>
            <li className="font-medium hover:text-[#ff7a18]">
              <Link to="../Details">Account</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/5 font-poppins text-xs leading-5">
          <h5 className="text-2xl font-jost leading-9">Contact Us</h5>
          <div className="">
            <a href="" className="block">
              +234 801 234 5678
            </a>
            <a href="" className="block  py-2">
              hello@chukskitchen.com
            </a>
            <a href="" className="block">
              123 Taste Blvd, Lagos, Nigeria
            </a>
          </div>
        </div>
        <div className="w-1/5 font-poppins text-xs leading-5">
          <h5 className="text-2xl font-jost leading-9">Socials</h5>
          <div className="">
            <a href="" className="block">
              Facebook
            </a>
            <a href="" className="block  py-2">
              Twitter
            </a>
            <a href="" className="block">
              LinkedIn
            </a>
            <a href="" className="block  pt-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-20 flex items-center justify-between">
        <p className="font-poppins text-xs">
          &copy; 2020 Lift Media. All rights reserved.
        </p>
        <a href="#">
          <img
            src={arrow}
            className="bg-[#0081FE] rounded-4xl py-2.5 px-3"
            alt="arrow-up"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
