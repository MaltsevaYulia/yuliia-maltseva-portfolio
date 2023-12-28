import React, { useContext } from "react";
import Image from "next/image";
import css from "./Logo.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

const Logo = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      {/* <div className={css.logo}>Yuliia Maltseva</div> */}
      {/* <svg width="20" height="20">
        <use href="/logo/Frame 2.png" />
      </svg> */}

      <Image
        // src="/logo/YM-logo-light.png"
        src={
          mode === "dark" ? "/logo/YM-logo-dark.png" : "/logo/YM-logo-light.png"
        }
        alt="logo"
        width={250}
        height={40}
        className={css.logo}
      />
      {/* <Image
        src="/logo/my-logo-removebg-preview.png"
        alt="logo"
        width={150}
        height={40}
        className={css.logo}
      /> */}
    </>
  );
};

export default Logo;
