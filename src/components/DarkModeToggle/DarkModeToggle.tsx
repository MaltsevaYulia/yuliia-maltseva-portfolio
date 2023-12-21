"use client";
import React, { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <DarkModeSwitch
      checked={mode === "light"}
      onChange={toggle}
          size={40}
      moonColor="#FFC107"
      sunColor="#FFC107"
    />
  );
};

export default DarkModeToggle;
