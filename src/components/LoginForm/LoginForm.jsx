import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { closeModalLogin } from "../../redux/modal/slice";
import { selectLoginModal } from "../../redux/modal/selectors";
import css from "./LoginForm.module.css";
import { useEffect } from "react";
import { useCallback } from "react";

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

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <ModalBackdrop onClick={() => dispatch(closeModalLogin())}>
      <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Login Form</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.label}>
              Email
              <Field type="email" name="email" className={css.input} />
            </label>
            <label className={css.label}>
              Password
              <Field type="password" name="password" className={css.input} />
            </label>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.btn}>
                Log In
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </ModalBackdrop>
  );
}
