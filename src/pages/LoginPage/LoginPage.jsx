import React, { useEffect } from "react";
import LoginForm from "./LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const naviagate = useNavigate();
  let { user } = useSelector((state) => state.loginReducer);
  useEffect(() => {
    document.title = "Unknown® - Login - Client";
    if (user) naviagate("/");
  }, [user, naviagate]);
  return (
    <div className=" w-[100vw] h-[100vh] bg-bg-login">
      <a href="/">
        <img src="/img/unknown-logo.svg" alt="logo" />
      </a>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
