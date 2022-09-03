import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { fetchUserLogin } from "modules/auth/authThunk";
import { Notification } from "common/components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "assets/icons/logo.svg";
import styles from "../auth.module.scss";

type Props = {};

interface Inputs {
  username: string;
  password: string;
}

export const Login: FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { error } = useAppSelector((state) => state.user);
  const [send,setSend] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) =>{
    setSend(true)
    dispatch(fetchUserLogin({ ...data, cb: () => navigate("/links") }));
  }

  return (
    <div className={styles.wrapper}>
      {error && send && (
        <Notification text={error} status="error"/>
      )}
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <h1 className={styles.title}>С возвращением!</h1>
        <p className={styles.subtitle}>
          Авторизуйтесь, чтобы получить все возможности сервиса
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input_container}>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              {...register("username", { required: true, minLength: 3 })}
            />
            {errors.username && errors.username.type === "required" ? (
              <span className={styles.input_error}>
                Email является обязательным полем
              </span>
            ) : errors.username?.type === "minLength" ? (
              <span className={styles.input_error}>
                Минимальное количество символов в этом поле три
              </span>
            ) : (
              ""
            )}
          </div>
          <div className={styles.input_container}>
            <input
              className={styles.input}
              type="password"
              {...register("password", { required: true, minLength: 3 })}
              placeholder="Пароль"
            />
            {errors.password && errors.password?.type === "required" ? (
              <span className={styles.input_error}>
                Пароль является обязательным полем
              </span>
            ) : errors.password?.type === "minLength" ? (
              <span className={styles.input_error}>
                Минимальное количество символов в этом поле три
              </span>
            ) : (
              ""
            )}
          </div>
          <button className={styles.button}>Войти</button>
        </form>
        <p className={styles.text}>
          Нет аккаунта?{" "}
          <Link className="link" to="/registration">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};
