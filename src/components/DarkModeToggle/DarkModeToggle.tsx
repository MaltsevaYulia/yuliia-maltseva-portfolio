"use client";
import React, { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "@/context/ThemeContext";
import css from "./DarkModeToggle.module.scss";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={css.wrapper}>
      <DarkModeSwitch
        checked={mode === "light"}
        onChange={toggle}
        size={32}
        moonColor="#FFC107"
        sunColor="#FFC107"
      />
     </div>
  );
};

export default DarkModeToggle;
