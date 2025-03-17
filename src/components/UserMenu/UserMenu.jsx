import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/slice";

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.parag}>Welcome , {user.email}</p>
      <button type="button" onClick={handleLogOut} className={css.btn}>
        Log Out
      </button>
    </div>
  );
}
