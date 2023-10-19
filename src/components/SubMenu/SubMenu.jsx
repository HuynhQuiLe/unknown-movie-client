import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/user/logoutAction";
import { useLocation } from "react-router-dom";

const SubMenu = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.loginReducer);

  const logoutAccount = () => {
    dispatch(logout());
  };

  return (
    <div
      className={`fixed bg-black ${
        pathname.includes("movies") ? "top-[62px]" : "top-[50px]"
      }  z-10  right-0 py-[10px] px-[20px]  max-w-[1440px] h-[50vh] w-[100vw] m-auto pt-[50px] cursor-default`}
    >
      <div className="container max-w-[1024px] m-auto">
        <div className="flex justify-between">
          <div className="text-white text-center">
            <div>
              <img
                src={user.hinhAnh}
                alt="avatar"
                className="w-[80px] h-[80px] object-cover rounded-full m-auto mb-2"
              />
              <div className="relative">
                <p className="mb-2 text-[16px]">{user.ten}</p>
                <div className="absolute right-[10px] top-[5px]">
                  <p className="text-[10px] overflow-hidden text-black bg-white  px-[3px] rounded-[2px]">
                    {user.chucVu}
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-1 text-pink-700">Thẻ thành viên số.</p>

            <div className="bg-white px-[5px] py-[5px] w-[200px] relative">
              <img src="/img/6503162891545151988.png" alt="barcode" />
              <div className="absolute text-black bottom-0 left-[50%] bg-white  -translate-x-[50%]">
                <p className="text-[9px]">{user._id}</p>
              </div>
            </div>
            <ul className="text-[14px] text-white mt-3">
              <li className="py-2 text-hover-effect cursor-not-allowed">
                Quản lý tài khoản
              </li>
              <li className="py-2 text-hover-effect cursor-not-allowed">
                Thay đổi tài khoản
              </li>
              <li
                className="py-2 text-hover-effect cursor-pointer"
                onClick={logoutAccount}
              >
                Đăng xuất
              </li>
            </ul>
          </div>

          <div>
            <div className="  flex items-center relative">
              <video
                src="/video/refined-kai.mp4"
                loop
                muted
                autoPlay
                className="w-[60px]"
              ></video>
              <p className="text-white">{user.tinhAnh}</p>
              <div className="group absolute w-[15px] h-[15px] rounded-full text-center leading-[15px] top-[10px] cursor-pointer right-0 bg-white">
                ?
                <div className="absolute bg-white hidden group-hover:block w-[200px] top-[-250%] right-[30px] rounded-[3px] py-1 px-2 ">
                  <p className="w-fit text-[12px]">
                    <span className=" text-purple-700 font-bold">
                      TINH ANH{" "}
                    </span>{" "}
                    - Sử dụng để giao dịch trong website này
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
