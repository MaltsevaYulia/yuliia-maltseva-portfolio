import React from 'react'
import css from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className="container">
      <div className={css.footer}>
        Designed & Built by Yuliia Maltseva ©{new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer