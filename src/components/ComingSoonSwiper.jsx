import React from "react";
import "./comingSoonSwiper.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ComingSoonCard from "./ComingSoonCard";

function ComingSoonSwiper({ comingMovies }) {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      className="coming-soon-swiper"
      loop={true}
      breakpoints={{
        420: { slidesPerView: 1 },
        580: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 6 },
      }}
    >
      {comingMovies.map((movie) => (
        <SwiperSlide key={movie._id}>
          <ComingSoonCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ComingSoonSwiper;
