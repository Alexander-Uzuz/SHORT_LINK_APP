import React from "react";
import { useAppSelector } from "core/redux/hooks";
import ArrowRight from "assets/icons/arrowRight.svg";
import ArrowDown from "assets/icons/arrowDown.svg";
import styles from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  const {username} = useAppSelector(state => state.user.user)

  return (
    <header>
      <div className={styles.container}>
        <img className={styles.arrow_right} src={ArrowRight} alt="ArrowRight" />
        <div className={styles.profile}>
          <p>{username}</p>
          <img src={ArrowDown} alt="ArrowDown" />
        </div>
      </div>
    </header>
  );
};
