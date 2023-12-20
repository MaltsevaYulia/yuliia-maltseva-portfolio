import React from "react";
import Link from "next/link";
import navBarLinks from "@/constants/navBarLinks";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex  items-center justify-center gap-2">
        {navBarLinks.map(({ title, url, id }) => (
          <li key={id}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
