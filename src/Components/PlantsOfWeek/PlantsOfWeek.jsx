import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const PlantOfWeek = () => {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/Plants.json") 
      .then((res) => res.json())
      .then((data) => {
        
        const featured = data[Math.floor(Math.random() * data.length)];
        setPlant(featured);
      })
      .catch((err) => console.error("Error loading plants:", err));
  }, []);

  if (!plant) return null; 

  return (
    <section className="py-16 bg-gradient-to-r from-[#e8f5e9] to-[#f1f8e9] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-green-700 mb-10"
        >
          🌿 Plant of the Week
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto flex flex-col md:flex-row items-center"
        >
          {/* Image */}
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full md:w-1/2 h-64 object-cover p-5 rounded-2xl"
          />

          {/* Content */}
          <div className="p-6 text-left space-y-3 md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-700">
              {plant.plantName}
            </h3>
            <p className="text-sm text-gray-500">{plant.category}</p>

            <p className="text-gray-700 leading-relaxed">{plant.description}</p>

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="text-gray-700 font-medium">
                {plant.rating} / 5
              </span>
            </div>

            <p className="text-lg font-semibold text-green-700">
              ${plant.price}
            </p>

            <button
              className="mt-3 px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#00b09b] to-[#96c93d] hover:from-[#088c7c] hover:to-[#6f972b] transition-all shadow-md"
              onClick={() =>
                window.location.assign(`/plantsDetails/${plant.plantId}`)
              }
            >
              View Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlantOfWeek;
