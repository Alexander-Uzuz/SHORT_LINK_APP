import {useEffect} from 'react';
import { useAppSelector, useAppDispatch } from 'core/redux/hooks';
import { fetchGetLinks } from '../linksThunk';
import {Table} from '../components/Table/Table';
import styles from './links.module.scss';

type Props = {}

export const Links = (props: Props) => {
  const {token} = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const _token = token ? token : '';
    dispatch(fetchGetLinks(_token))
  }, [])

  return (
    <div className={styles.container}>
        <Table/>
    </div>
  )
}