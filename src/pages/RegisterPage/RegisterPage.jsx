import React, { useEffect } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegisterPage = () => {
  useEffect(() => {
    document.title = "Unknown® - Register - Client";
  }, []);
  return (
    <div className=" w-[100vw] h-[100vh] bg-bg-login">
      <a href="/">
        <img src="/img/unknown-logo.svg" alt="logo" />
      </a>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
