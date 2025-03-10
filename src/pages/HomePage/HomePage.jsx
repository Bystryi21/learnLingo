import AboutUs from "../../components/AboutUs/AboutUs";
import AppBar from "../../components/AppBar/AppBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function HomePage() {
  return (
    <>
      <AppBar />
      <AboutUs />
      <LoginForm />
      <RegistrationForm />
    </>
  );
}
