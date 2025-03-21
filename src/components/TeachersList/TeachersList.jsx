import { useEffect } from "react";
import { fetchTeachers } from "../../redux/teachers/operations";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import css from "./Teachers.module.css";

export default function TeachersList() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.teachers.items);
  console.log(list);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {list.map((item) => {
          return (
            <li key={item.id} className={css.item}>
              <Card value={item} from="teacherlist" />
            </li>
          );
        })}
      </ul>
      <button type="button">Load more</button>
    </div>
  );
}
