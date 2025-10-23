import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserPlus } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

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
    <div className="navbar shadow-sm bg-linear-to-br from-[#d8f7cd] to-[#dfeed8]">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <GiTreeBranch className="text-green-300" size={30} />
          <span className="text-green-800">Green</span>
          <span className="text-yellow-500">Nest</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-10 rounded-full border-2 border-green-500">
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="User"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
              >
                <li className="font-semibold text-center text-gray-700">
                  {user.displayName || "User"}
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-outline btn-success text-sm sm:text-base"
            >
              <IoLogIn size={20} /> Login
            </NavLink>
            <NavLink
              to="/auth/registration"
              className="btn btn-outline btn-error text-sm sm:text-base"
            >
              <FaUserPlus size={20} /> SignUp
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
