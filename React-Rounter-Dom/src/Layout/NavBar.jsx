import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-10">
        <nav className="bg-black/50 text-white backdrop-blur-sm px-6 py-4 flex items-center justify-between fixed rounded-full w-[80%]">
          <h1 className="text-xl font-bold">Company Name</h1>

          <ul className="flex items-center justify-between gap-x-4 text-lg font-medium">
            <li className="hover:bg-black hover:text-white px-3 py-1.5 rounded-full transition-all duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1.5 rounded-full transition-all duration-300">
              <Link to="/product">Product</Link>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1.5 rounded-full transition-all duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1.5 rounded-full transition-all duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
