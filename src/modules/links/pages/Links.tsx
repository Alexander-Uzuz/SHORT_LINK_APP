import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { Table } from "../components/Table/Table";
import styles from "./links.module.scss";
import { fetchGetAllLinks } from "../linksThunk";

type Props = {};

export const Links:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const {size} = useAppSelector(state => state.links)
  const _token = useAppSelector(state => state.user.user.token);

  useEffect(() => {
    if(!size){
      const token = _token ? _token : '';
      dispatch(fetchGetAllLinks(token))
    }
  },[])

  return (
    <div className={styles.container}>
      <Table />
    </div>
  );
};
