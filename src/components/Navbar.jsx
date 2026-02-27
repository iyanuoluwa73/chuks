import { Link } from "react-router-dom";
import menu from "../images/menu.svg";
import close from "../images/close.svg";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="box-border mx-auto relative flex justify-between items-start pt-3 px-8 lg:py-3 lg:px-8">
      <h5 className=" text-[#FF7A18] font-island text-2xl lg:text-4xl">
        <Link to="../Onboard">Chuks Kitchen</Link>
      </h5>
      {!open && (
        <img
          src={menu}
          className="cursor-pointer lg:hidden"
          onClick={toggleMenu}
          alt="menu button"
        />
      )}
      {open ? (
        <ul className="h-screen m-auto text-center mt-20">
          <li className="font-medium  hover:text-[#ff7a18] lg:pr-40">
            <Link to="/">Home</Link>
          </li>
          <li className="font-medium py-10 lg:pr-40 hover:text-[#ff7a18]">
            <Link to="../Explore">Explore</Link>
          </li>
          <li className="font-medium pb-10 lg:pr-40 hover:text-[#ff7a18]">
            <Link to="../Cart">My Orders</Link>
          </li>
          <li className="font-medium hover:text-[#ff7a18]">
            <Link to="../Details">Account</Link>
          </li>
        </ul>
      ) : (
        <div></div>
      )}

      {open && (
        <img
          src={close}
          className="cursor-pointer lg:hidden"
          onClick={toggleMenu}
          alt="close button"
        />
      )}
      <ul className="hidden lg:flex lg:justify-between lg:pt-4">
        <li className="font-medium  active:text-[#ff7a18] lg:pr-40">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium  lg:pr-40 hover:text-[#ff7a18]">
          <Link to="../Explore">Explore</Link>
        </li>
        <li className="font-medium  lg:pr-40 hover:text-[#ff7a18]">
          <Link to="../Cart">My Orders</Link>
        </li>
        <li className="font-medium hover:text-[#ff7a18]">
          <Link to="../Details">Account</Link>
        </li>
      </ul>
      <Link to="../Login" className="hidden lg:block">
        <button className=" bg-[#ff7a18] py-4 px-14 text-white rounded-xl font-semibold cursor-pointer">
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
