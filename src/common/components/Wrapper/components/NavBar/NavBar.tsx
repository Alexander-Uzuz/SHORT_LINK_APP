import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import styles from "./NavBar.module.scss";

type Props = {};

export const NavBar = (props: Props) => {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo_wrapper}>
          <div className={styles.logo_container}>
            <img className={styles.logo} src={Logo} alt="Logo" />
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/links">Мои ссылки</Link>
          </li>
          <li className={styles.item}>
            <Link to="/links/create">Сократить</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Выйти</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
