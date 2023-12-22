import React from "react";
import Link from "next/link";
import navBarLinks from "@/constants/navBarLinks";
import css from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <ul className="flex  items-center justify-center gap-2">
        {navBarLinks.map(({ title, url, id }) => (
          <li key={id}>
            <Link href={url} className={css.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
