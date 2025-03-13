import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { closeModalRegister } from "../../redux/modal/slice";
import { selectRegisterModal } from "../../redux/modal/selectors";
import css from "./Registration.module.css";
import { useCallback } from "react";
import { useEffect } from "react";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectRegisterModal);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        dispatch(closeModalRegister());
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
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <ModalBackdrop onClick={() => dispatch(closeModalRegister())}>
      <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Registration Form</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.label}>
              Username
              <Field type="text" name="name" className={css.input} />
            </label>
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
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </ModalBackdrop>
  );
}
