import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserPlus } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const linkClasses =
    "block px-3 py-2 text-gray-700 font-medium transition duration-300 hover:text-green-600";
  const activeClasses = "text-green-600 font-semibold";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
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
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          Plants
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClasses : ""}`
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="relative">
      {/* Navbar Main */}
      <div className="navbar shadow-sm bg-gradient-to-br from-[#e4f5de] via-[#c4e7c1] to-[#a3d49c] px-4">
        {/* LEFT: Menu + Logo */}
        <div className="navbar-start flex items-center gap-2">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-green-700 hover:bg-green-100 transition-all duration-200"
          >
            <RxHamburgerMenu size={22} />
          </button>

          {/* Logo */}
          <a className="flex items-center gap-1 ml-2">
            <GiTreeBranch className="text-green-300" size={26} />
            <span className="text-green-800 font-semibold md:text-2xl">
              Green
            </span>
            <span className="text-yellow-500 font-semibold md:text-xl">
              Nest
            </span>
          </a>
        </div>

        {/* ✅ Center (Desktop Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* ✅ RIGHT: Auth Buttons */}
        <div className="navbar-end flex gap-2 sm:gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-9 sm:w-10 rounded-full border-2 border-green-500">
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
                className="dropdown-content z-[50] menu p-2 shadow-lg bg-gradient-to-b from-[#90ddc3] to-[#f0a28c] rounded-xl w-44 transition-all duration-300"
              >
                <li className="font-semibold text-center text-gray-800 mb-2">
                  {user.displayName || "User"}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-white bg-gradient-to-r from-[#917178] to-[#cf777b] py-2 rounded-md font-medium hover:from-[#e33b61] hover:to-[#e94525] shadow-md transition-all duration-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="text-black bg-gradient-to-r from-[#00b09b] to-[#96c93d] px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:from-[#088c7c] hover:to-[#6f972b] shadow-md transition-all duration-300 flex items-center gap-1"
              >
                <IoLogIn size={16} /> Login
              </NavLink>

              <NavLink
                to="/auth/registration"
                className="text-black bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium hover:from-[#e96b4e] hover:to-[#f9a65c] shadow-md transition-all duration-300 flex items-center gap-1"
              >
                <FaUserPlus size={16} /> SignUp
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 z-50">
          <ul className="menu p-3 flex flex-col gap-1">{links}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
