"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
        // onSwiper={(swiper: any) => console.log(swiper)}
        className="h-96 w-full rounded-lg"
      >
        <SwiperSlide>
          <Image
            src="/assets/hero.jpg"
            alt="Album"
            width={300}
            height={300}
            className="block h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/hero.jpg"
            alt="Album"
            width={300}
            height={300}
            className="block h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/hero.jpg"
            alt="Album"
            width={300}
            height={300}
            className="block h-full w-full object-contain"
          />
        </SwiperSlide>
      </Swiper>

      {/* <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image
            src="/assets/hero.jpg"
            alt="Album"
            width={300}
            height={300}
            className="block h-full w-full object-contain"
          /></SwiperSlide>
        <SwiperSlide><Image
            src="/assets/hero.jpg"
            alt="Album"
            width={300}
            height={300}
            className="block h-full w-full object-contain"
          /></SwiperSlide>
        <SwiperSlide><Image
            src="/assets/hero.jpg"
            alt="Album"
            width={300}
            height={300}
            className="block h-full w-full object-contain"
          /></SwiperSlide>
        
      </Swiper> */}
    </div>
  );
};

export default Slider;
