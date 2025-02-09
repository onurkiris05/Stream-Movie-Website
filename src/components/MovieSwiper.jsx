import React from "react";
import "./movieSwiper.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function MovieSwiper({ movies, handleChange }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectCoverflow, Autoplay]}
      className="movieSwiper"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie._id}>
          <img
            onClick={() => handleChange(movie._id)}
            src={movie.previewImg}
            alt={`Preview Image: ${movie.title}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
