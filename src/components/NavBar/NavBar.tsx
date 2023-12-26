import React from "react";
import Link from "next/link";
import navBarLinks from "@/constants/navBarLinks";
import css from "./NavBar.module.scss";

const NavBar = ({ isOpen }: { isOpen:boolean }) => {
  return (
    <nav className={isOpen ? css.nav_active : css.nav}>
      <ul className={css.nav_list}>
        {navBarLinks.map(({ title, url, id }) => (
          <li key={id}>
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
