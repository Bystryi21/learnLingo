import css from "./AuthNav.module.css";
import LogIn from "../Svg/LogIn";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <nav className={css.navWrapper}>
        <ul className={css.authList}>
          <li className={css.firstItem}>
            <LogIn />
            Log in
          </li>
          <li className={css.secondItem}>Registration</li>
        </ul>
      </nav>
    </div>
  );
}
