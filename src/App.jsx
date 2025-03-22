import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Teachers from "./pages/Teachers/Teachers";
import NotFound from "./components/NotFound/NotFound";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Faviurites from "./pages/Favourites/Favourites";
import BookTrial from "./components/BookTrial/BookTrial";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="favourites" element={<Faviurites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <LoginForm />
      <RegistrationForm />
      <BookTrial />
    </>
  );
}

export default App;
