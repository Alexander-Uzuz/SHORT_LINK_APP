import React from 'react';
import {Table} from '../components/Table/Table';
import styles from './links.module.scss';

type Props = {}

export const Links = (props: Props) => {
  return (
    <div className={styles.container}>
        <Table/>
    </div>
  )
}