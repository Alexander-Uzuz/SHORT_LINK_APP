import React,{FC} from "react";
import styles  from "./Notification.module.scss";
type Props = {
    text:string;
    status:'error' | 'success';
};

export const Notification:FC<Props> = (props) => {
    const {text, status} = props;
    const stateNotification = status === 'error' ? {backgroundColor:'#e3342f',} : {backgroundColor:'#38c172',}


  return (
    <div className={styles.ctrl}>
      <span className={styles.notification} style={stateNotification}>{text}</span>
    </div>
  );
};
