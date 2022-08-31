import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import styles from "../auth.module.scss";

type Props = {};

export const Login = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.error}>Не правильный логин или пароль</p>
      </div>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <h1 className={styles.title}>С возвращением!</h1>
        <p className={styles.subtitle}>
          Авторизуйтесь, чтобы получить все возможности сервиса
        </p>
        <input className={styles.input} type="text" placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Пароль" />
        <button className={styles.button}>Войти</button>
        <p className={styles.text}>
          Нет аккаунта?{" "}
          <Link className="link" to="/registration">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};
