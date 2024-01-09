"use client";
import React, { useContext } from "react";
import Link from "next/link";
import navBarLinks from "@/constants/navBarLinks";
import { ThemeContext } from "@/context/ThemeContext";
import css from "./NavBar.module.scss";
import useMedia from "@/hooks/useMedia";

const NavBar = ({
  isOpen,
  toggleBurgerMenu,
}: {
  isOpen: boolean;
  toggleBurgerMenu: () => void;
}) => {
  const { mode } = useContext(ThemeContext);
  const { mobile } = useMedia();

  return (
    <nav
      className={isOpen ? `${css.nav} ${css.nav_active}` : css.nav}
      style={{
        backgroundColor:
          mobile && mode === "dark" ? "rgb(13, 6, 41)" : mobile ? "#fff" : "",
      }}
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
