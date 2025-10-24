// src/Pages/ErrorPage.jsx
import React from "react";
import { useNavigate } from "react-router";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-50 p-6 text-center">
      {/* Animated Warning Icon */}
      <motion.div
        className="text-red-500 text-8xl mb-6"
        animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaExclamationTriangle />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-6xl font-extrabold text-green-800 mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-700 mb-6 text-lg md:text-xl max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Sorry! The page you are looking for doesn't exist or something went
        wrong.
      </motion.p>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 shadow-lg transform hover:scale-105 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft /> Go Back
      </motion.button>
    </div>
  );
};

export default ErrorPage;
