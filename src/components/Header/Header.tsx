"use client";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../Logo/Logo";
import css from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header className={` ${css.header}`}>
      <div className={`container ${css.header_container}`}>
        <h1 className="visually-hidden ">
          Yuliia Maltseva FullStack Developer portfolio
        </h1>
        <Logo />
        <div className={css.wrapper}>
          <DarkModeToggle />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
