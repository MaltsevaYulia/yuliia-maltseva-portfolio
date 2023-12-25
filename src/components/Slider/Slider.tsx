"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IImage } from "@/constants/projects";
import useMedia from "@/hooks/useMedia";


// import "./styles.css";

const Slider = ({ images }: { images: IImage[] }) => {
  const { mobile } = useMedia();

  return (
    <Swiper
      style={{ width: "100%" }}
      navigation
      pagination={{ type: "fraction" }}
      modules={[Navigation, Pagination]}
      // slidesPerView={mobile ? 1 : 2}
      // onSwiper={(swiper: any) => console.log(swiper)}
    >
      {images.map(({ src, alt, id }) => (
        <SwiperSlide key={id}  style={{ width: "100%" }}>
          <Image src={src} alt={alt} width={450} height={300} />
        </SwiperSlide>
      ))}
    </Swiper>

    //
  );
};

export default Slider;
{
  /* <Swiper
      //   effect={"cube"}
      //   grabCursor={true}
      //   cubeEffect={{
      //     shadow: true,
      //     slideShadows: true,
      //     shadowOffset: 20,
      //     shadowScale: 0.94,
      //   }}
      //   pagination={true}
      //   modules={[EffectCube, Pagination]}
      //   className="mySwiper"
      // >
      //   <SwiperSlide><Image
      //       src="/assets/hero.jpg"
      //       alt="Album"
      //       width={300}
      //       height={300}
      //       className="block h-full w-full object-contain"
      //     /></SwiperSlide>
      //   <SwiperSlide><Image
      //       src="/assets/hero.jpg"
      //       alt="Album"
      //       width={300}
      //       height={300}
      //       className="block h-full w-full object-contain"
      //     /></SwiperSlide>
      //   <SwiperSlide><Image
      //       src="/assets/hero.jpg"
      //       alt="Album"
      //       width={300}
      //       height={300}
      //       className="block h-full w-full object-contain"
      //     /></SwiperSlide>
        
      // </Swiper> */
}
