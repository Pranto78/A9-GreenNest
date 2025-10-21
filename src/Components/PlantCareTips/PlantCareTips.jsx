import React from "react";
import { motion } from "framer-motion";
import { FaTint, FaSun, FaLeaf } from "react-icons/fa";

const PlantCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Watering",
      description: "Keep soil moist, not drenched.",
      icon: <FaTint className="text-green-600 text-2xl" />,
    },
    {
      id: 2,
      title: "Sunlight",
      description: "Bright, indirect light.",
      icon: <FaSun className="text-yellow-500 text-2xl" />,
    },
    {
      id: 3,
      title: "Fertilizing",
      description: "Monthly during growth.",
      icon: <FaLeaf className="text-green-700 text-2xl" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <div className="bg-[#e3e8e1] p-6 rounded-2xl shadow-sm">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold text-gray-800"
      >
        Plant Care Tips
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-gray-500 mb-4"
      >
        Essential Guidance for Thriving Greens
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-3 gap-4"
      >
        {tips.map((tip) => (
          <motion.div
            key={tip.id}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-2xl p-4 flex items-start gap-3 cursor-pointer"
          >
            <div className="mt-1">{tip.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlantCareTips;
