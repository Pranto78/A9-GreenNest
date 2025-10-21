import React, { useState, useEffect } from "react";
import plantsData from "../../../public/Plants.json";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // load plants from JSON
    setPlants(plantsData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Plants</h1>

      {/* Grid layout: 1 column mobile, 2 columns larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Plant image */}
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-80 object-cover p-5 rounded-4xl"
            />

            {/* Plant info */}
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-1">{plant.plantName}</h2>
              <p className="text-gray-500 mb-2">{plant.category}</p>
              <p className="text-yellow-500 font-bold mb-4">
                ⭐ {plant.rating.toFixed(1)}
              </p>

              {/* Details button */}
              <button className="border border-green-500 text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
