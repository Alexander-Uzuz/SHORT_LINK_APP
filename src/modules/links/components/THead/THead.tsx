import React, { FC } from "react";
import { IKey } from "modules/links/interface/ISortConfig";
import { ISortConfig } from "modules/links/interface/ISortConfig";
import ArrowUpSort from "assets/icons/arrowUpSort.svg";
import ArrowDownSort from "assets/icons/arrowDownSort.svg";
import styles from "../Table/Table.module.scss";

type Props = {
  sortConfig: ISortConfig;
  requestSort: (key: IKey) => void;
};

export const THead: FC<Props> = (props) => {
  const { sortConfig, requestSort } = props;

  const getKeyFor = (key: IKey) =>
    sortConfig.key == key && sortConfig.direction === "asc"
      ? ArrowUpSort
      : ArrowDownSort;

  return (
    <thead>
      <tr className={styles.thead_tr}>
        <th
          onClick={() => requestSort("short")}
          className={styles.th}
          scope="col"
        >
          Короткая ссылка
          <img
            className={styles.arrow_icon}
            src={getKeyFor("short")}
            alt="ArrowDown"
          />
        </th>
        <th
          onClick={() => requestSort("target")}
          className={styles.th}
          scope="col"
        >
          Исходная ссылка
          <img
            className={styles.arrow_icon}
            src={getKeyFor("target")}
            alt="ArrowDown"
          />
        </th>
        <th
          onClick={() => requestSort("counter")}
          className={styles.th}
          scope="col"
        >
          Переходы
          <img
            className={styles.arrow_icon}
            src={getKeyFor("counter")}
            alt="ArrowDown"
          />
        </th>
      </tr>
    </thead>
  );
};
