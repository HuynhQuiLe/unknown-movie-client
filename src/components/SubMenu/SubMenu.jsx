import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/user/logoutAction";
import { useLocation } from "react-router-dom";
import { getAllTicketsByUser } from "../../redux/action/ticket/getAllTicketsByUserAction";
import {
  userLocalStorage,
  moviesByTheaterLocalStorage,
} from "../../service/localService";
import ConfirmLogOut from "./ConfirmLogOut/ConfirmLogOut";

const SubMenu = () => {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const { tickets } = useSelector((state) => state.getAllTicketsByUserReducer);
  const bigData = moviesByTheaterLocalStorage.get();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.loginReducer);

  const logoutAccount = () => {
    dispatch(logout());
  };

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getAllTicketsByUser(userLocalStorage.get()._id));
  }, [dispatch]);

  const renderListTicket = () => {
    if (!tickets.length) {
      return (
        <tr className="flex justify-between font-light text-[14px] text-center mb-3">
          <td className="block text-left w-full" colSpan={6}>
            Bạn chưa đặt vé xem phim nào.
          </td>
        </tr>
      );
    } else {
      return tickets.map((item, index) => {
        let logo = "";
        let tenCR = "";
        let tenfilm = "";
        let posterPhim = "";
        bigData.map((itm) => {
          if (itm.maHeThongRap === item.maHeThongRap) {
            logo = itm.logo;
            itm.danhSachCumRap.map((it) => {
              if (it.maCumRap === item.maCumRap) {
                tenCR = it.tenCumRap;
                it.danhSachPhim.map((phim) => {
                  if (phim.maPhim === item.maPhim) {
                    tenfilm = phim.tenPhim;
                    posterPhim = phim.hinhChinh;
                  }
                });
              }
            });
          }
        });
        return (
          <tr
            className="flex justify-between font-light text-[14px] text-center mb-3"
            key={index}
          >
            <td className="block w-[50px]">{index + 1}</td>
            <td className=" w-[200px] flex text-center">
              <img
                src={posterPhim}
                className="w-[50px] h-[75px] object-cover mr-2"
                alt="logo"
              />
              <p
                className="max-w-[140px]"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {" "}
                {tenfilm}
              </p>
            </td>
            <td className=" w-[200px] flex">
              <img src={logo} className="w-[25px] h-[25px] mr-2" alt="logo" />
              <p
                className="max-w-[170px]"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {tenCR}
              </p>
            </td>
            <td className="block w-[150px]">
              {item.ngay} - {item.gio}
            </td>
            <td
              className="block w-[100px]"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item.ghe.map((item, idx) => {
                return (
                  <span key={idx}>
                    {idx === 0 ? item.soGhe : `, ${item.soGhe}`}
                  </span>
                );
              })}
            </td>
            <td className="block w-[100px]">
              <span className="px-[10px] py-[3px] rounded-[3px] border border-red-600 text-red-600">
                Đã xem
              </span>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div
      className={`fixed bg-black border-b-[1px] border-[#fca311] max-h-[400px] overflow-hidden ${
        pathname.includes("movies") ? "top-[62px]" : "top-[50px]"
      }  z-10  right-0 py-[10px] px-[20px]  max-w-[1440px] h-[50vh] w-[100vw] m-auto pt-[50px] cursor-default`}
    >
      <div className="container max-w-[1024px] m-auto">
        <div className="flex justify-between">
          <div className="text-white text-center max-w-[200px]">
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
                // onClick={logoutAccount}
                onClick={showModal}
              >
                Đăng xuất
              </li>
            </ul>
          </div>

          <div className="text-white w-full px-5 overflow-hidden">
            <p className="text-[#fca311] font-bold mb-2">VÉ CỦA TÔI</p>
            <div className="w-full px-5 max-h-[300px] overflow-scroll">
              <table className="table w-full font-light max-h-[400px]">
                <thead>
                  <tr className="flex font-light text-[14px] mb-5">
                    <th className="block font-bold w-[50px]">STT</th>
                    <th className="block font-bold w-[200px]">Phim</th>
                    <th className="block font-bold w-[200px]">Rạp</th>
                    <th className="block font-bold w-[150px]">Suất chiếu</th>
                    <th className="block font-bold w-[100px]">Ghế</th>
                    <th className="block font-bold w-[100px]">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>{tickets && renderListTicket()}</tbody>
              </table>
            </div>
          </div>

          <div className="max-w-[100px]">
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
      <ConfirmLogOut
        open={open}
        setOpen={setOpen}
        logoutAccount={logoutAccount}
      />
    </div>
  );
};

export default SubMenu;
