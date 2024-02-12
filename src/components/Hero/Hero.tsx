import React from "react";
import Image from "next/image";
import css from "./Hero.module.scss";
import LinkYellow from "../LinkYellow/LinkYellow";

const Hero = () => {
  return (
    <>
      <section className={css.hero}>
        <div className="flex flex-col text-center justify-center">
          <div className="flex flex-col text-start justify-center mb-2">
            <h1 className={css.text}>Frontend developer</h1>
            <h2 className={css.title}>
              Hello,my name is
              <br></br> Yuliia Maltseva
            </h2>
          </div>
          <LinkYellow pass="/about">Read more</LinkYellow>
        </div>
        <div className="w-100">
          <Image
            src="/assets/hero.jpg"
            alt="Yuliia Maltseva Portrait Photo"
            width={345}
            height={345}
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
