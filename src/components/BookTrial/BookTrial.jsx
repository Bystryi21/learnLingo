import { Field, Form, Formik } from "formik";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import Close from "../Svg/Close";
import css from "./BookTrial.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBookModal } from "../../redux/modal/selectors";
import { useEffect } from "react";
import { closeBookModal } from "../../redux/modal/slice";
import { useCallback } from "react";

export default function BookTrial() {
  const isOpen = useSelector(selectBookModal);

  console.log(isOpen);

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

  return (
    <ModalBackdrop onClick={closeModal}>
      <div className={css.wrapper}>
        <h2>Book trial lesson</h2>
        <p>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div>
          <img />
          <div>
            <p>Your teacher</p>
            <p>Jane Smith</p>
          </div>
        </div>
        <p>What is your main reason for learning English?</p>
        <div>
          <label>
            <input type="checkbox" name="option" value="Career and business" />
            Career and business
          </label>
          <label>
            <input type="checkbox" name="option" value="Lesson for kids" />
            Lesson for kids
          </label>
          <label>
            <input type="checkbox" name="option" value="Living abroad" />
            Living abroad
          </label>
          <label>
            <input type="checkbox" name="option" value="Exams and coursework" />
            Exams and coursework
          </label>
          <label>
            <input
              type="checkbox"
              name="option"
              value="Culture, travel or hobby"
            />
            Culture, travel or hobby
          </label>
        </div>
        <Formik initialValues={{ name: "", email: "", number: "" }}>
          <Form>
            <label>
              <Field type="text" name="name" placeholder="Full Name" />
            </label>
            <label>
              <Field type="email" name="email" placeholder="Email" />
            </label>
            <label>
              <Field type="number" name="number" placeholder="Phone number" />
            </label>
            <button type="submit">Book</button>
          </Form>
        </Formik>
        <div className={css.close}>
          <Close />
        </div>
      </div>
    </ModalBackdrop>
  );
}
