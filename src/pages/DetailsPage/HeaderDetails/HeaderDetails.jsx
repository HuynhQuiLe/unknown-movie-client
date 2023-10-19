import React from "react";
import User from "../../../components/Header/User/User";

const HeaderDetails = () => {
  return (
    <header className="h-[10vh] flex items-center justify-between">
      <a href="/">
        <img
          src="/img/unknown-logo.svg"
          className="w-[140px] py-[20px]"
          alt="logo"
        />
      </a>
      <User />
    </header>
  );
};

export default HeaderDetails;
