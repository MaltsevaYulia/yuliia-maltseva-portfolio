import React from "react";
import css from "./Title.module.scss";

const Title = ({
  children,
  tag = "h1",
}: {
  children: string;
  tag?: string;
}) => {
  if (tag === "h2") return <h2 className={css.title}>{children}</h2>;
  else
    return (
      <div className="text-center">
        <h1 className={css.title}>{children}</h1>
      </div>
    );
};

export default Title;
