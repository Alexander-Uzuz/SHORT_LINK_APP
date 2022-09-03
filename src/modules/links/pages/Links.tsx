import { FC } from "react";
import { Table } from "../components/Table/Table";
import styles from "./links.module.scss";

type Props = {};

export const Links:FC<Props> = (props) => {

  return (
    <div className={styles.container}>
      <Table />
    </div>
  );
};
