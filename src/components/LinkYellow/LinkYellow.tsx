import React from "react";
import Link from "next/link";
import styles from "./LinkYellow.module.scss";

interface ILink {
  children: string;
  pass: string;
  rel?: string | undefined;
  target?: string | undefined;
}

const LinkYellow = ({ children, pass, rel, target }: ILink) => {
  return (
    <div className="flex items-center justify-center">
      <Link href={pass} className={styles.link} rel={rel} target={target}>
        {children}
      </Link>
    </div>
  );
};

export default LinkYellow;
