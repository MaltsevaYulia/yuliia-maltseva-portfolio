import React from "react";
import Image from "next/image";
import Link from "next/link";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/static/png/grid.png')] w-full h-screen bg-cover bg-center flex lg:flex-row flex-col items-center justify-center lg:-mt-20 mt-0">
        <div className="flex flex-col text-center justify-center mb-2">
          <div className="flex flex-col text-start justify-center mb-2">
            <h1 className={css.text}>Frontend developer</h1>
            <h2 className={css.title}>
              Hello,my name is
              <br></br> Yuliia Maltseva
            </h2>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/about" className={css.link}>
              Read more
            </Link>
          </div>
        </div>
        <div className="w-100 mt-5 md:mt-10 lg:mt-0  ">
          <Image
            src="/assets/hero.jpg"
            alt="Yuliia Maltseva Portrait Photo"
            width={300}
            height={300}
            priority={true}
            sizes="(100vw, 100vh)"
            className="border-solid border-gray-500 border rounded-xl brightness-125 hover:grayscale transition duration-300 ease-in-out hover:rotate-6 rotate-0"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
