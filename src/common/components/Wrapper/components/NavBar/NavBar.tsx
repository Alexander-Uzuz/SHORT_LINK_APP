import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import styles from "./NavBar.module.scss";

type Props = {};

export const NavBar = (props: Props) => {
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
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
            <span onClick={handleExit}>Выйти</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
