import { useEffect, useState } from "react";
import Favourites from "../Svg/Favourites";
import LessonsOnline from "../Svg/LessonsOnline";
import Star from "../Svg/Star";
import Stick from "../Svg/Stick";
import Online from "../Svg/Online.jsx";
import css from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { openBookModal } from "../../redux/modal/slice.js";
import YelllowFavourites from "../Svg/YelllowFavourites.jsx";

export default function Card({ value, onRemove }) {
  const [addValue, setAddValue] = useState(false);

  const [isFavourite, setIsFavourite] = useState(false);

  const dispatch = useDispatch();

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
    id,
  } = value;

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const valueHandler = () => {
    setAddValue((prev) => !prev);
  };

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (favourites.some((fav) => fav.id === id)) {
      setIsFavourite(true);
    }
  }, [id]);

  const handleFavouriteClick = () => {
    if (!isLoggedIn) {
      alert("Будь ласка, увійдіть, щоб додати до обраних");
      return;
    }

    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (isFavourite) {
      favourites = favourites.filter((fav) => fav.id !== id);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      setIsFavourite(false);
      onRemove(id);
    } else {
      favourites.push(value);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
    setIsFavourite(!isFavourite);
  };

  const handlerBookTrial = () => {
    if (!isLoggedIn) {
      return alert("Please logged in");
    }
    dispatch(openBookModal(value));
  };

  return (
    <div className={css.container} onClick={valueHandler}>
      <div>
        <div className={css.imgWrapper}>
          <div className={css.online}>
            <Online />
          </div>

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
          <div
            className={css.favourites}
            onClick={(e) => {
              e.stopPropagation();
              handleFavouriteClick();
            }}
          >
            {isFavourite ? <YelllowFavourites /> : <Favourites />}
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
          <button
            className={css.trialBtn}
            onClick={(e) => {
              e.stopPropagation();
              handlerBookTrial();
            }}
          >
            Book trial lesson
          </button>
        )}
      </div>
    </div>
  );
}
