import React from "react";
import { NavBar, Header } from "./components";
import { Outlet } from "react-router-dom";
import styles from "./Wrapper.module.scss";

type Props = {};

export const Wrapper = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}><Header/></div>
      <div className={styles.navbar}><NavBar /></div>
      <div className={styles.content}><Outlet/></div>
    </div>
  );
};
