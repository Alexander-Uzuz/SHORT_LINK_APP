import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "assets/icons/logo.svg";
import styles from "../auth.module.scss";

type Props = {};

export const Registration = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.error}>Не правильный логин или пароль</p>
      </div>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <h1 className={styles.title}>Добро пожаловать!</h1>
        <p className={styles.subtitle}>
          Зарегистрируйтесь и воспользуйтесь всеми возможностями нашего сервиса
        </p>
        <input className={styles.input} type="text" placeholder="Имя" />
        <input className={styles.input} type="text" placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Пароль" />
        <button className={styles.button}>Зарегистрироваться</button>
        <p className={styles.text}>
          Уже зарегистрированы?{" "}
          <Link className="link" to="/login">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
