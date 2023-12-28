import React, { useEffect, useState } from "react";
import useMedia from "@/hooks/useMedia";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import NavBar from "@/components/NavBar/NavBar";
import css from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mobile } = useMedia();

  const toggleBurgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = isOpen ? "hidden" : "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [mobile, isOpen]);

  return (
    <>
      <NavBar isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu} />
      {!isOpen ? (
        <button type="button" className={css.btn} onClick={toggleBurgerMenu}>
          <RxHamburgerMenu size="30" />
        </button>
      ) : (
        <button
          type="button"
          className={[css.btn, css.btn_close].join(" ")}
          onClick={toggleBurgerMenu}
        >
          <IoClose size="30" />
        </button>
      )}
    </>
  );
};

export default BurgerMenu;
