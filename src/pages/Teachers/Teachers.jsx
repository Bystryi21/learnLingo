import AppBar from "../../components/AppBar/AppBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./Teachers.module.css";

export default function Teachers() {
  return (
    <div className={css.container}>
      <AppBar />
      <TeachersList />
    </div>
  );
}
