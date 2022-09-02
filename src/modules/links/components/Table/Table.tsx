import React from "react";
import { useAppSelector } from "core/redux/hooks";
import Copy from "assets/icons/copy.svg";
import styles from "./Table.module.scss";
type Props = {};

export const Table = (props: Props) => {
  const { links } = useAppSelector((state) => state.links);
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Мои ссылки</caption>
      <thead>
        <tr className={styles.thead_tr}>
          <th className={styles.th} scope="col">
            Короткая ссылка
          </th>
          <th className={styles.th} scope="col">
            Исходная ссылка
          </th>
          <th className={styles.th} scope="col">
            Переходы
          </th>
        </tr>
      </thead>
      <tbody>
        {links.length &&
          links.map((link) => {
            return (
              <tr className={styles.tr}>
                <td className={styles.td}>{link.short}</td>
                <td className={styles.td}>{link.target.slice(0, 24)}...</td>
                <td className={styles.td}>{link.counter}</td>
                <td className={styles.td}>
                  <div>
                    <img src={Copy} alt="Copy" />
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
