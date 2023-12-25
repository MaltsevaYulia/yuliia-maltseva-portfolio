import React from 'react'
import css from './BGContainer.module.scss'
const BGContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={css.bg}>{children}</div>;
};

export default BGContainer