import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import SubMenu from "../../SubMenu/SubMenu";
import { useLocation } from "react-router-dom";

const User = () => {
  const { pathname } = useLocation();

  const [showSubMenu, setShowSubMenu] = useState(false);

  const { user } = useSelector((state) => state.loginReducer);

  const renderDefault = () => {
    return (
      <a className="account ml-7 flex items-center" href="/login">
        <img
          src="/img/user.png"
          alt="user"
          className="w-[40px] h-[40px] border border-1 rounded-full "
        />

        <p className={pathname.includes("movies") ? "ml-2 text-white" : "ml-2"}>
          Đăng nhập
        </p>
      </a>
    );
  };

  const renderInforUser = () => {
    return (
      <>
        <div
          className="account ml-7 flex items-center cursor-pointer relative"
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <img
            src={user.hinhAnh}
            alt="user"
            className="w-[40px] h-[40px] border border-1 rounded-full object-cover "
          />

          <p
            className={pathname.includes("movies") ? "ml-2 text-white" : "ml-2"}
          >
            {user.ten}
          </p>
          <FaAngleDown
            className={pathname.includes("movies") ? "ml-1 text-white" : "ml-1"}
          ></FaAngleDown>
        </div>
        {showSubMenu && <SubMenu />}
      </>
    );
  };

  return <>{user ? renderInforUser() : renderDefault()}</>;
};

export default User;
