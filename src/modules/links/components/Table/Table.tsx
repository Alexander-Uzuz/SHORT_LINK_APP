import React from "react";
import Copy from 'assets/icons/copy.svg';
import styles from "./Table.module.scss";
type Props = {};

export const Table = (props: Props) => {
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
        <tr className={styles.tr}>
          <td className={styles.td}>https://goo.su/uyHJ</td>
          <td className={styles.td}>https://www.phpbbguru.net/co</td>
          <td className={styles.td}>2</td>
          <td className={styles.td}>
            <div>
                <img src={Copy} alt="Copy" />
            </div>
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>https://goo.su/uyHJ</td>
          <td className={styles.td}>https://www.phpbbguru.net/co</td>
          <td className={styles.td}>2</td>
          <td className={styles.td}>
            <div>
                <img src={Copy} alt="Copy" />
            </div>
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>https://goo.su/uyHJ</td>
          <td className={styles.td}>https://www.phpbbguru.net/co</td>
          <td className={styles.td}>2</td>
          <td className={styles.td}>
            <div>
                <img src={Copy} alt="Copy" />
            </div>
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>https://goo.su/uyHJ</td>
          <td className={styles.td}>https://www.phpbbguru.net/co</td>
          <td className={styles.td}>2</td>
          <td className={styles.td}>
            <div>
                <img src={Copy} alt="Copy" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
