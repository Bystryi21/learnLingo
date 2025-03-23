import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { closeModalRegister, togglePassword } from "../../redux/modal/slice";
import {
  selectPassword,
  selectRegisterModal,
} from "../../redux/modal/selectors";
import css from "./Registration.module.css";
import { useCallback } from "react";
import { useEffect } from "react";
import Close from "../Svg/Close";
import Eye from "../Svg/Eye";
import { FaRegEye } from "react-icons/fa";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectRegisterModal);

  const isOpenPassword = useSelector(selectPassword);

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

  const handleSubmit = async (values, actions) => {
    try {
      console.log(values);
      dispatch(register(values)).unwrap();
      actions.resetForm();
      dispatch(closeModalRegister());
    } catch (error) {
      console.log(error);
    }
  };

  const closeHandler = () => {
    dispatch(closeModalRegister());
  };

  const passwordIsOpen = () => {
    dispatch(togglePassword());
  };

  return (
    <ModalBackdrop onClick={closeHandler}>
      <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.par}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.label}>
              <Field
                type="text"
                name="name"
                className={css.input}
                placeholder="Username"
              />
            </label>
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
                type={isOpenPassword ? "text" : "password"}
                name="password"
                className={css.input}
                placeholder="Password"
                onClick={passwordIsOpen}
              />
              {isOpenPassword ? (
                <div className={css.eye}>
                  <FaRegEye />
                </div>
              ) : (
                <div className={css.eye}>
                  <Eye />
                </div>
              )}
            </label>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.btn}>
                Sign Up
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
