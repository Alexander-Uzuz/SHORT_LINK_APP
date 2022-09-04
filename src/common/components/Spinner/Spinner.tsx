import React,{FC} from 'react';
import SpinnerIcon from 'assets/icons/spinner.svg';
import styles from './Spinner.module.scss';

type Props = {}

export const Spinner:FC<Props> = (props) => {
  return (
    <div className={styles.container}>
        <img src={SpinnerIcon} alt="Spinner" />
    </div>
  )
}