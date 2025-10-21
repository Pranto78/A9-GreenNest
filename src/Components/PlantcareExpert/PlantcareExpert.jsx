import React, { useEffect, useState } from "react";

const PlantExperts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experts = [
    {
      id: 1,
      name: "Dr. Anya Sharra",
      role: "Botanist & Plant Health Specialist",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Urban Gardening Coach",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Sophia Lin",
      role: "Indoor Plant Designer",
      image: "https://i.ibb.co.com/M5xWfQBV/1000x1000-headshot.jpg",
    },
    {
      id: 4,
      name: "Ethan Green",
      role: "Sustainable Gardening Expert",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-[#e3e8e1] p-8 rounded-2xl mt-10 shadow-sm overflow-hidden">
      <h2
        className={`text-lg font-semibold text-gray-800 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
      >
        Meet Our Green Experts
      </h2>

      <div
        className={`grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 justify-items-center transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {experts.map((expert, index) => (
          <div
            key={expert.id}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`flex flex-col items-center text-center bg-white p-4 rounded-2xl shadow-md transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-28 h-28 object-cover rounded-full border-2 border-green-200 mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="font-semibold text-gray-800 text-sm">
              {expert.name}
            </h3>
            <p className="text-gray-600 text-xs mt-1">{expert.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantExperts;
