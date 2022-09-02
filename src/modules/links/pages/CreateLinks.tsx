import React from "react";
import { useAppDispatch,useAppSelector } from "core/redux/hooks";
import { post } from "api/baseUrl";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateLink.module.scss";

type Props = {};

interface IForm {
  text: string;
}

export const CreateLinks = (props: Props) => {
  const {token} = useAppSelector(state => state.user.user) 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async(data) => {
    const _token = token ? token : '';
    const response = post(`/squeeze?link=${data.text}`,undefined, _token)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Сократите ссылку</h1>
        <label className={styles.label} htmlFor="input">
          Длинная ссылка
        </label>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input_container}>
            <input
              className={styles.input}
              id="input"
              type="text"
              placeholder="Введите длинную ссылку"
              {...register("text", { required: true })}
            />
            {errors.text && (
              <span className={styles.input_error}>
                Данное поле является обязательным
              </span>
            )}
          </div>
          <button className={styles.button}>Сократить</button>
        </form>
      </div>
    </div>
  );
};
