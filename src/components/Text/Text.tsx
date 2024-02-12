import React from "react";
import { Nunito } from "next/font/google";
import styles from "./Text.module.scss";

const nunito = Nunito({ subsets: ["latin"] });

const Text = ({ children }: { children: string }) => {
  return <p className={`${nunito.className} ${styles.text}`}>{children}</p>;
};

export default Text;
