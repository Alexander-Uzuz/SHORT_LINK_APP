import {FC} from "react";
import Copy from "assets/icons/copy.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from '../Table/Table.module.scss';
import {ILink} from '../../interface/ILink';

type Props = {
    link:ILink;
};

export const LinkComponent:FC<Props> = ({link}) => {
  return (
    <tr key={link.id} className={styles.tr}>
      <td className={styles.td}>
        <a href={link.short} target="_blank">
          {link.short}
        </a>
      </td>
      <td className={styles.td}>{link.target.slice(0, 24)}...</td>
      <td className={styles.td}>{link.counter}</td>
      <td className={styles.td}>
        <CopyToClipboard text={link.short}>
          <div className={styles.copy}>
            <img src={Copy} alt="Copy" />
          </div>
        </CopyToClipboard>
      </td>
    </tr>
  );
};
