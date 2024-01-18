import React from "react";
import css from "./Title.module.scss";

const Title = ({ children }: { children: string }) => {
  return <h1 className={css.title}>{children}</h1>;
};

export default Title;
