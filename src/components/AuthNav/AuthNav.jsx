import css from "./AuthNav.module.css";
import LogIn from "../Svg/LogIn";
import { useDispatch } from "react-redux";
import { openModalRegister, openModalLogin } from "../../redux/modal/slice";

export default function AuthNav() {
  const dispath = useDispatch();

  return (
    <div className={css.container}>
      <nav className={css.navWrapper}>
        <ul className={css.authList}>
          <li className={css.firstItem}>
            <LogIn />
            <button
              type="button"
              className={css.btn}
              onClick={() => dispath(openModalLogin())}
            >
              Log in
            </button>
          </li>
          <li className={css.secondItem}>
            <button
              type="button"
              className={css.btn}
              onClick={() => dispath(openModalRegister())}
            >
              Registration
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
