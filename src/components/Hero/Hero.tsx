import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('/static/png/grid.png')] w-full h-screen bg-cover bg-center flex lg:flex-row flex-col items-center justify-center lg:-mt-20 mt-0">
      <div className="flex flex-col text-center justify-center">
        <h1 className="lg:text-5xl text-3xl font-bold">
          I am Yuliia Maltseva Frontend developer
        </h1>
        <div className="flex items-center justify-center">
          <Link href="/about">Read more about me</Link>
        </div>
      </div>
      <div className="w-100 mt-5 md:mt-10 lg:mt-0">
        <Image
          src="/assets/hero.jpg"
          alt="Yuliia Maltseva Portrait Photo"
          width={300}
          height={300}
          priority={true}
          sizes="(100vw, 100vh)"
          className="rounded-xl brightness-125 hover:grayscale transition duration-300 ease-in-out hover:rotate-6 rotate-0"
        />
      </div>
    </section>
  );
}

export default Hero