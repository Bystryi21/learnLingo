import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css.container}>
      <nav>
        <ul className={css.navList}>
          <li className={css.item}>Home</li>
          <li className={css.item}>Teachers</li>
        </ul>
      </nav>
    </div>
  );
}
