import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import Logo from "../Svg/Logo";

export default function AppBar() {
  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <Logo />
        <h2 className={css.title}>LearnLingo</h2>
      </div>
      <Navigation />
      <AuthNav />
    </div>
  );
}
