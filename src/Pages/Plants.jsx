import React from "react";
import { NavLink, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { FaStar, FaMoneyBillWave } from "react-icons/fa";

const Plants = () => {
  const plants = useLoaderData(); // Data comes from loader in your router
  console.log(plants);

  // Animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-700">
        All Plants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant, index) => (
          <motion.div
            key={plant.plantId}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-72 object-cover p-5 rounded-4xl"
            />

            <div className="p-4 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold mb-1">{plant.plantName}</h2>
              <p className="text-gray-500 mb-1">{plant.category}</p>

              <p className="text-green-600 font-semibold mb-2 flex items-center gap-1">
                <FaMoneyBillWave /> ${plant.price}
              </p>

              <p className="text-yellow-500 font-bold mb-4 flex items-center gap-1">
                <FaStar /> {plant.rating.toFixed(1)}
              </p>

              <NavLink
                to={`/plantsDetails/${plant.plantId}`}
                className="border border-green-500 text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
              >
                View Details
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
