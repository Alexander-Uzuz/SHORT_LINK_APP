import React from "react";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BASE_URL } from "api/baseUrl";
import { fetchAddLink } from "../linksThunk";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateLink.module.scss";

type Props = {};

interface IForm {
  link: string;
}

export const CreateLinks = (props: Props) => {
  const { token } = useAppSelector((state) => state.user.user);
  const { currentLink } = useAppSelector((state) => state.links);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IForm> = async ({ link }) => {
    const _token = token ? token : "";
    dispatch(fetchAddLink({ link, token: _token }));
  };

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
              {...register("link", { required: true })}
            />
            {errors.link && (
              <span className={styles.input_error}>
                Данное поле является обязательным
              </span>
            )}
          </div>
          <button className={styles.button}>Сократить</button>
        </form>
        {currentLink && (
          <>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="input">
                Короткая ссылка
              </label>
              <input
                className={styles.input}
                type="text"
                value={`${BASE_URL}/s/${currentLink.short}`}
                disabled
              />
            </div>
            <CopyToClipboard text={`${BASE_URL}/s/${currentLink.short}`}>
              <button className={styles.button}>Копировать</button>
            </CopyToClipboard>
          </>
        )}
      </div>
    </div>
  );
};
