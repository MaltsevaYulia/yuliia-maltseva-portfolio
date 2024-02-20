import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Allison } from "next/font/google";
import { ThemeContext } from "@/context/ThemeContext";
import css from "./Logo.module.scss";

const allison = Allison({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <Link href='/' className={css.logo}>
      <Image
        src={
          mode === "dark" ? "/logo/YM-logo-dark.png" : "/logo/YM-logo-light.png"
        }
        alt="logo"
        width={250}
        height={40}
        className={css.logo_img}
      />
      <div
        className={`${allison.className} ${css.logo_name} ${
          mode === "dark" ? css.logo_name_white : ""
        }}`}
      >
        Yuliia Maltseva
      </div>
    </Link>
  );
};

export default Logo;
