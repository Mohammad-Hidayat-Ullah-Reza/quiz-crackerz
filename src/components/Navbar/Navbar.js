import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-semibold text-orange-800"
        >
          <img
            className="w-5 mr-3"
            src="/logo.png"
            alt="logo of reza education ltd."
          ></img>
          Reza Quiz
        </Link>
      </div>
      <div className="hidden md:block flex-none">
        <ul className="menu menu-horizontal p-0 font-semibold text-orange-800">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/statistic">Statistic</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-fit"
            style={{ right: 0 }}
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/statistic">Statistic</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
