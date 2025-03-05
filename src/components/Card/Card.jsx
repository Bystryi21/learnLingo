import { useState } from "react";
import Favourites from "../Svg/Favourites";
import LessonsOnline from "../Svg/LessonsOnline";
import Star from "../Svg/Star";
import Stick from "../Svg/Stick";
import css from "./Card.module.css";

export default function Card({ value }) {
  const [addValue, setAddValue] = useState(false);
  const valueHandler = () => {
    setAddValue((prev) => !prev);
  };

  const {
    lessons_done,
    price_per_hour,
    rating,
    experience,
    name,
    surname,
    lesson_info,
    conditions,
    levels,
    languages,
    reviews,
  } = value;
  return (
    <div className={css.container} onClick={valueHandler}>
      <div>
        <div className={css.imgWrapper}>
          <img src={value.avatar_url} alt="" className={css.img} />
        </div>
      </div>
      <div>
        <div className={css.firstWrapper}>
          <p className={css.languagesP}>Languages</p>
          <div className={css.info}>
            <p className={css.lessons}>
              <span className={css.paddingToOnline}>
                <LessonsOnline />
              </span>
              Lessons online
            </p>
            <Stick />
            <p className={css.lessons}>Lessons done: {lessons_done}</p>
            <Stick />
            <p className={css.lessons}>
              <span className={css.paddingToOnline}>
                <Star />
              </span>
              Rating: {rating}
            </p>
            <Stick />
            <p className={css.lessons}>
              Price / 1 hour:
              <span className={css.priceColor}>{price_per_hour}$</span>
            </p>
          </div>
          <div className={css.favourites}>
            <Favourites />
          </div>
        </div>
        <div>
          <p className={css.nameAndSurname}>
            {name}&nbsp;
            {surname}
          </p>
          <ul className={css.languagesList}>
            Speaks:&nbsp;
            {languages.map((item, index) => (
              <li key={index} className={css.languagesItem}>
                {item}
                {index < languages.length - 1 && ","}
              </li>
            ))}
          </ul>
          <p className={css.lessonInfo}>
            Lesson Info:<span className={css.spanLesson}> {lesson_info}</span>
          </p>
          <div className={css.condition}>
            Conditions:
            <span className={css.spanCondition}>{conditions[0]}</span>
            {addValue && <p className={css.expirience}>{experience}</p>}
          </div>
        </div>
        {!addValue && (
          <button
            className={css.btnRead}
            onClick={(event) => {
              event.stopPropagation();
              valueHandler();
            }}
          >
            Read More
          </button>
        )}

        {addValue && (
          <ul className={css.reviewList}>
            {reviews.map((item, index) => (
              <li key={index} className={css.reviewItem}>
                <div className={css.nameAndImgWrapper}>
                  <div className={css.reviewImg}>
                    {item.reviewer_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className={css.reviewName}>{item.reviewer_name}</div>
                    <div className={css.reviewRating}>
                      <Star />
                      <span className={css.spanRating}>
                        {item.reviewer_rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={css.reviewComment}>{item.comment}</div>
              </li>
            ))}
          </ul>
        )}
        <ul className={css.levelsList}>
          {levels.map((item, index) => (
            <li key={index}>
              <p className={css.levelListItem}>#{item}</p>
            </li>
          ))}
        </ul>
        {addValue && (
          <button className={css.trialBtn}>Book trial lesson</button>
        )}
      </div>
    </div>
  );
}
