import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import Logo from "../Svg/Logo";
import { NavLink } from "react-router-dom";

export default function AppBar() {
  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <Logo />
        <NavLink className={css.title} to="/">
          LearnLingo
        </NavLink>
      </div>
      <Navigation />
      <AuthNav />
    </div>
  );
}
