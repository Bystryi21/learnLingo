import { useDispatch } from "react-redux";
import css from "./AboutUs.module.css";
import { openModalRegister } from "../../redux/modal/slice";

export default function AboutUs() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.container}>
        <div className={css.firstWrapper}>
          <h1 className={css.title}>
            Unlock your potential with the best
            <span className={css.span}> language</span> tutors
          </h1>
          <p className={css.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <div className={css.btnWrapper}>
            <button
              type="button"
              className={css.btn}
              onClick={() => dispatch(openModalRegister())}
            >
              Get started
            </button>
          </div>
        </div>
        <div>
          <img
            src="/womenWithLaptop-min.jpg"
            alt="women with laptop"
            className={css.img}
          />
        </div>
      </div>
      <div className={css.secondWrapper}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <p className={css.textAbout}>32,000 +</p>
            <p className={css.spanText}> Experienced tutors</p>
          </li>
          <li className={css.listItem}>
            <p className={css.textAbout}>300,000 +</p>
            <p className={css.spanText}> 5-star tutor reviews</p>
          </li>
          <li className={css.listItem}>
            <p className={css.textAbout}>120 +</p>
            <p className={css.spanText}> Subjects taught</p>
          </li>
          <li className={css.listItem}>
            <p className={css.textAbout}>200 +</p>
            <p className={css.spanText}> Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </>
  );
}
