"use client";
import React, { useContext } from "react";
import Link from "next/link";
import navBarLinks from "@/constants/navBarLinks";
import { ThemeContext } from "@/context/ThemeContext";
import css from "./NavBar.module.scss";

const NavBar = ({
  isOpen,
  toggleBurgerMenu,
}: {
  isOpen: boolean;
  toggleBurgerMenu: () => void;
}) => {
  const { mode } = useContext(ThemeContext);

  return (
    <nav
      className={isOpen ? `${css.nav} ${css.nav_active}` : css.nav}
      style={{ backgroundColor: mode === "dark" ? "rgb(13, 6, 41)" : "#fff" }}
    >
      <ul className={css.nav_list}>
        {navBarLinks.map(({ title, url, id }) => (
          <li key={id} onClick={toggleBurgerMenu}>
            <Link href={url} className={css.nav_link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
