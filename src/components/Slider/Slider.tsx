"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { IImage } from "@/constants/projects";
import useMedia from "@/hooks/useMedia";


// import "./styles.css";

const Slider = ({ images }: { images: IImage[] }) => {
  const { mobile, tablet, desktop } = useMedia();

  return (
    <Swiper
      style={{ width: "100%" }}
      navigation
      // pagination={{ type: "fraction" }}
      // modules={[Navigation, Pagination]}
      // slidesPerView={mobile ? 1 : 2}
      // onSwiper={(swiper: any) => console.log(swiper)}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map(({ src, alt, id }) => (
        <SwiperSlide key={id} style={{ width: "100%" }}>
          <Image
            src={src}
            alt={alt}
            width={mobile ? 298 : tablet ? 358 : desktop ? 439 : undefined}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    //
  );
};

export default Slider;
