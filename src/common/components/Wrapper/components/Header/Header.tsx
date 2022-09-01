import React from "react";
import ArrowRight from "assets/icons/arrowRight.svg";
import ArrowDown from "assets/icons/arrowDown.svg";
import styles from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <div className={styles.container}>
        <img className={styles.arrow_right} src={ArrowRight} alt="ArrowRight" />
        <div className={styles.profile}>
          <p>Александр</p>
          <img src={ArrowDown} alt="ArrowDown" />
        </div>
      </div>
    </header>
  );
};
