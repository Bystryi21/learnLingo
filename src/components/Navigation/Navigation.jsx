import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={css.item}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/teachers" className={css.item}>
              Teachers
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/favourites" className={css.item}>
                Favourites
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
