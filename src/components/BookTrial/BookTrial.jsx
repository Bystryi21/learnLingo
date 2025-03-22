import { Field, Form, Formik } from "formik";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import Close from "../Svg/Close";
import css from "./BookTrial.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBookModal, selectBookValues } from "../../redux/modal/selectors";
import { useEffect } from "react";
import { closeBookModal } from "../../redux/modal/slice";
import { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function BookTrial() {
  const isOpen = useSelector(selectBookModal);

  const bookValues = useSelector(selectBookValues);

  const dispatch = useDispatch();

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        dispatch(closeBookModal());
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

  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    dispatch(closeBookModal());
  };

  const toastNotify = () => {
    toast.success("Lesson successfully booked");
  };

  return (
    <>
      <ToastContainer />
      <ModalBackdrop onClick={closeModal}>
        <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
          <h2 className={css.title}>Book trial lesson</h2>
          <p className={css.text}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={css.wrapperInfo}>
            <img
              src={bookValues.avatar_url}
              alt="image avatar"
              className={css.img}
            />
            <div className={css.imgAndName}>
              <p className={css.teacherTitle}>Your teacher</p>
              <p className={css.name}>
                {bookValues.name}&nbsp;
                {bookValues.surname}
              </p>
            </div>
          </div>
          <p className={css.about}>
            What is your main reason for learning English?
          </p>
          <div className={css.radio}>
            <label className={css.label}>
              <input type="radio" name="option" value="Career and business" />
              Career and business
            </label>
            <label className={css.label}>
              <input type="radio" name="option" value="Lesson for kids" />
              Lesson for kids
            </label>
            <label className={css.label}>
              <input type="radio" name="option" value="Living abroad" />
              Living abroad
            </label>
            <label className={css.label}>
              <input type="radio" name="option" value="Exams and coursework" />
              Exams and coursework
            </label>
            <label className={css.label}>
              <input
                type="radio"
                name="option"
                value="Culture, travel or hobby"
              />
              Culture, travel or hobby
            </label>
          </div>
          <Formik initialValues={{ name: "", email: "", number: "" }}>
            <Form className={css.form}>
              <label className={css.formLabel}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={css.field}
                />
              </label>
              <label className={css.formLabel}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={css.field}
                />
              </label>
              <label className={css.formLabel}>
                <Field
                  type="number"
                  name="number"
                  placeholder="Phone number"
                  className={css.field}
                />
              </label>
              <button type="submit" className={css.btn} onClick={toastNotify}>
                Book
              </button>
            </Form>
          </Formik>
          <div className={css.close} onClick={closeModal}>
            <Close />
          </div>
        </div>
      </ModalBackdrop>
    </>
  );
}
