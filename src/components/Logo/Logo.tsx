import React, { useContext } from "react";
import { Allison } from "next/font/google";
import Image from "next/image";
import css from "./Logo.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

const allison = Allison({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={css.logo}>
      <Image
        // src="/logo/YM-logo-light.png"
        src={
          mode === "dark" ? "/logo/YM-logo-dark.png" : "/logo/YM-logo-light.png"
        }
        alt="logo"
        width={250}
        height={40}
        className={css.logo_img}
      />
      <div className={`${allison.className} ${css.logo_name}`}>
        Yuliia Maltseva
      </div>
    </div>
  );
};

export default Logo;
