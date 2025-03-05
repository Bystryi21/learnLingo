import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
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
            <NavLink to="teachers" className={css.item}>
              Teachers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
