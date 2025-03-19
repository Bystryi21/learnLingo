import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { closeModalLogin } from "../../redux/modal/slice";
import { selectLoginModal } from "../../redux/modal/selectors";
import css from "./LoginForm.module.css";
import { useEffect } from "react";
import { useCallback } from "react";
import Close from "../Svg/Close";
import Eye from "../Svg/Eye";

export default function LoginForm() {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectLoginModal);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        dispatch(closeModalLogin());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(login(values)).unwrap();
      actions.resetForm();
      dispatch(closeModalLogin());
    } catch (error) {
      console.log(error);
    }
  };

  const closeHandler = () => {
    dispatch(closeModalLogin());
  };

  return (
    <ModalBackdrop onClick={closeHandler}>
      <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.par}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.label}>
              <Field
                type="email"
                name="email"
                className={css.input}
                placeholder="Email"
              />
            </label>
            <label className={css.label}>
              <Field
                type="password"
                name="password"
                className={css.input}
                placeholder="Password"
              />
              <div className={css.eye}>
                <Eye />
              </div>
            </label>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.btn}>
                Log In
              </button>
            </div>
          </Form>
        </Formik>
        <div className={css.close} onClick={closeHandler}>
          <Close />
        </div>
      </div>
    </ModalBackdrop>
  );
}
