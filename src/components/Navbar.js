import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link to="/" className="text-white text-2xl font-bold">
          FOODIEDELIGHT
        </Link>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <div className="text-white flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <Link
              to="/"
              className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              to="/add"
              className="hover:bg-gray-700 px-3 py-2 rounded transition duration-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Add Restaurant
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
