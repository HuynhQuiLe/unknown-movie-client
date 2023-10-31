import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_SEAT } from "../../../../redux/constant/booking/bookingConstants";
import { userLocalStorage } from "../../../../service/localService";
import { message } from "antd";

const Seat = ({ ghe }) => {
  const { selectedSeats } = useSelector((state) => state.bookingReducer);
  const dispatch = useDispatch();

  let textClass = "";
  if (ghe.note === "LOI_DI") {
    textClass = "w-[40px] h-[40px] inline-block bg-black";
  } else {
    if (ghe.daDat) {
      textClass =
        "w-[40px] h-[40px] cursor-not-allowed  border border-1 bg-black text-white border-white inline-block rounded-[3px] text-center leading-[40px]";
    } else {
      const ind = selectedSeats.findIndex((item) => item.soGhe === ghe.soGhe);
      if (ind !== -1) {
        textClass =
          "w-[40px] h-[40px] cursor-pointer  border border-1 bg-[#fca311] text-black border-[#fca311] inline-block rounded-[3px] text-center leading-[40px]";
      } else {
        textClass =
          "w-[40px] h-[40px] cursor-pointer  border border-1 bg-white text-black border-white inline-block rounded-[3px] text-center leading-[40px]";
      }
    }
  }

  const select = (ghe) => {
    const user = userLocalStorage.get();
    if (!user) {
      message.error("Vui lòng đăng nhập để sử dụng dịch vụ.!");
      return;
    }
    if (!ghe.daDat && ghe.note === "ghe") {
      dispatch({ type: SELECTED_SEAT, payload: ghe });
    }
  };

  return (
    <span
      className={textClass + " hover:scale-95"}
      onClick={() => select(ghe)}
      style={{ transition: "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
    >
      {ghe.soGhe}
    </span>
  );
};

export default Seat;
