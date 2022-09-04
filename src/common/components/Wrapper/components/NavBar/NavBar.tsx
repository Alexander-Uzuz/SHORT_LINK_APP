import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import styles from "./NavBar.module.scss";

type Props = {};

export const NavBar: FC<Props> = (props) => {
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo_wrapper}>
          <div className={styles.logo_container}>
            <NavLink to={"/links"}>
              <img className={styles.logo} src={Logo} alt="Logo" />
            </NavLink>
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="/links">Мои ссылки</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/links/create">Сократить</NavLink>
          </li>
          <li className={styles.item}>
            <span onClick={handleExit}>Выйти</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
