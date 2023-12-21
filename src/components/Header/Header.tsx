"use client";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <h1 className="visually-hidden ">
        Yuliia Maltseva FullStack Developer portfolio
      </h1>
      <DarkModeToggle />
      <NavBar />
    </header>
  );
};

export default Header;
