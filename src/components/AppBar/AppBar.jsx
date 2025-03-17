import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import Logo from "../Svg/Logo";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <Logo />
        <NavLink className={css.title} to="/">
          LearnLingo
        </NavLink>
      </div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

selectIsLoggedIn;
