import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import AllPlants from "../Components/AllPlants/AllPlants";
import PlantCareTips from "../Components/PlantCareTips/PlantCareTips";
import PlantExperts from "../Components/PlantcareExpert/PlantcareExpert";

const Home = () => {
  const slides = [hero1, hero2, hero3];

  return (
    <>
      <div className="flex justify-center items-center my-10 px-4">
        <div className="w-full sm:w-3/4 md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                {/* Image */}
                <img
                  src={slide}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover brightness-75"
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex justify-center items-center px-2">
                  <h2 className="text-green-200 text-xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
                    Make The World Green
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <AllPlants></AllPlants>
      <PlantCareTips></PlantCareTips>
      <PlantExperts></PlantExperts>
    </>
  );
};

export default Home;
