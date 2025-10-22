import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e4f5de] via-[#c4e7c1] to-[#a3d49c] text-gray-800 py-10 mt-10 rounded-t-3xl shadow-inner">
      <div className="w-11/12 container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* 🌱 Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <GiTreeBranch size={32} className="text-green-600" />
            <h2 className="text-2xl font-bold text-green-800">
              Green<span className="text-yellow-500">Nest</span>
            </h2>
          </div>
          <p className="text-sm text-gray-700 max-w-xs">
            Nurturing your love for nature <br />one plant at a time.
          </p>
        </div>

        
        <nav className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a className="text-gray-700 hover:text-green-700 transition duration-300">
            About Us
          </a>
          <a className="text-gray-700 hover:text-green-700 transition duration-300">
            Contact
          </a>
          <a className="text-gray-700 hover:text-green-700 transition duration-300">
            Privacy Policy
          </a>
        </nav>

        
        <div className="flex gap-5">
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow hover:bg-green-100 hover:scale-110 transition duration-300"
          >
            <FaTwitter className="text-green-700" size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow hover:bg-green-100 hover:scale-110 transition duration-300"
          >
            <FaYoutube className="text-red-600" size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full shadow hover:bg-green-100 hover:scale-110 transition duration-300"
          >
            <FaFacebookF className="text-blue-600" size={20} />
          </a>
        </div>
      </div>

    
      <div className="mt-8 border-t border-green-300 pt-5 text-center text-sm text-gray-700">
        © 2025 <span className="font-semibold text-green-800">GreenNest</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
