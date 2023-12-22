"use client";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`container ${css.header}`}>
      <h1 className="visually-hidden ">
        Yuliia Maltseva FullStack Developer portfolio
      </h1>
      <Logo />
      <DarkModeToggle />
      <NavBar />
    </header>
  );
};

export default Header;
