import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { GiTreeBranch } from 'react-icons/gi';
import { IoLogIn } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Navbar = () => {
    const linkClasses =
      "relative px-3 py-2 text-gray-700 font-medium transition duration-300 ease-in-out hover:text-green-600";

    const activeClasses =
      "text-green-500 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full";

    const links = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClasses : ""}`
            }
            end
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClasses : ""}`
            }
          >
            Plants
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClasses : ""}`
            }
          >
            My Profile
          </NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar  shadow-sm bg-linear-to-br from-[#d8f7cd] to-[#dfeed8]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <GiTreeBranch className="text-green-300" size={30} />{" "}
            <span className="text-green-800">Green</span>{" "}
            <span className="text-yellow-500">Nest</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <a className="btn btn-outline btn-success">
            <IoLogIn size={24} /> Login
          </a>
          <a className="btn btn-outline btn-error">
            <FaUserPlus size={24} /> SignUp
          </a>
        </div>
      </div>
    );
};

export default Navbar;