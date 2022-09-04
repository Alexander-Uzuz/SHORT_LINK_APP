import {FC} from "react";
import { useAppSelector } from "core/redux/hooks";
import styles from "./Header.module.scss";

type Props = {};

export const Header:FC<Props> = (props) => {
  const {username} = useAppSelector(state => state.user.user)

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.profile}>
          <p>{username}</p>
        </div>
      </div>
    </header>
  );
};
