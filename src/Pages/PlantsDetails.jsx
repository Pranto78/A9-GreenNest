import React from "react";
import { useParams, useLoaderData } from "react-router"; // you said you're using react-router
import { FaStar } from "react-icons/fa";

const PlantsDetails = () => {
  const { id } = useParams(); // Get plant ID from URL
  const data = useLoaderData(); // This gives you the full array (10 plants)

  // Find the single plant matching the ID
  const plant = data.find((item) => item.plantId === parseInt(id));

  // Optional safety check in case no plant is found
  if (!plant) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-600">
        Plant not found 🌿
      </div>
    );
  }

  const {
    plantName,
    category,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    image,
    providerName,
  } = plant;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen rounded-2xl bg-linear-to-br from-[#d8f7cd] to-[#dfeed8] p-6">
      {/* Plant Image */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:w-2/5 w-full">
        <img
          src={image}
          alt={plantName}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-2/4 w-full mt-8 md:mt-0 md:ml-10 bg-green-50 p-6 rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800">{plantName}</h1>
        <p className="text-gray-600 mt-1">{category}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {[...Array(4)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating) ? "text-green-600" : "text-gray-300"
              } text-lg`}
            />
          ))}
          <span className="ml-2 text-gray-700 font-medium">{rating}</span>
        </div>

        <p className="mt-3 text-gray-600">{description}</p>

        <div className="mt-5">
          <p className="text-2xl font-bold text-gray-800">${price}</p>
          <br />
          
          <hr  className="mb-2 text-gray-400" />
          
          <span className=" bg-green-700 text-white px-3 py-1 rounded-md text-sm">
            In Stock: {availableStock}
          </span>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold">Care Level:</span> {careLevel}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Provider:</span> {providerName}
          </p>
        </div>

        {/* Consultation Form */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Book a Consultation with an Expert
          </h2>

          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-700 text-white py-2 rounded-md hover:bg-green-800 shadow-md"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
