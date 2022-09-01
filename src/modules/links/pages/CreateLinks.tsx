import React from "react";
import styles from "./CreateLink.module.scss";

type Props = {};

export const CreateLinks = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Сократите ссылку</h1>
        <label className={styles.label} htmlFor="input">Длинная ссылка</label>
        <input className={styles.input} id="input" type="text" placeholder="Введите длинную ссылку"/>
        <button className={styles.button}>Сократить</button>
      </div>
    </div>
  );
};
