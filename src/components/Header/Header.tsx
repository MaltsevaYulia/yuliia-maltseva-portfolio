"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useMedia from "@/hooks/useMedia";

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import css from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mobile } = useMedia();

  const toggleBurgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={`container ${css.header}`}>
      <h1 className="visually-hidden ">
        Yuliia Maltseva FullStack Developer portfolio
      </h1>
      <Logo />
      <DarkModeToggle />
      {mobile && (
        <button onClick={toggleBurgerMenu}>
          <GiHamburgerMenu />
        </button>
      )}
      {mobile && isOpen && <NavBar isOpen={isOpen} />}
      {!mobile && <NavBar isOpen={true} />}
    </header>
  );
};

export default Header;
