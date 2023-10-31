import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "./Ticket/Ticket";
import { bookSeat } from "../../../redux/action/seat/bookSeatAction";
import { adjustTinhAnh } from "../../../redux/action/tinhAnh/adjustTinhAnhAction";
import { userLocalStorage } from "../../../service/localService";
import { createTicket } from "../../../redux/action/ticket/createTicketAction";
import { RESET_SELECTED_SEAT } from "../../../redux/constant/booking/bookingConstants";

const ConfirmBooking = () => {
  const dispatch = useDispatch();

  const { selectedSeats, phim, heThongRap, cumRap, ngay, gio } = useSelector(
    (state) => state.bookingReducer
  );

  const { layoutGheByMaSuatChieu } = useSelector(
    (state) => state.getLayoutGheByMaSuatChieuReducer
  );

  const [open, setOpen] = useState(false);
  let isDisabled = false;

  if (
    !selectedSeats?.length ||
    !phim ||
    !heThongRap ||
    !cumRap ||
    !ngay ||
    !gio
  ) {
    isDisabled = true;
  }

  const payment = () => {
    const { seatMap, maSuatChieu } = layoutGheByMaSuatChieu;
    selectedSeats.map((ghe) => {
      seatMap.map((layout) => {
        layout.danhSachGhe.map((item) => {
          if (item.soGhe === ghe.soGhe) {
            item.daDat = true;
          }
        });
      });
    });

    // console.log(seatMap);
    dispatch(bookSeat(seatMap, maSuatChieu)).then((result) => {
      if (result) {
        setOpen(true);
        //handle minus TINH ANH
        dispatch(adjustTinhAnh(selectedSeats.length * 199));
        const { _id } = userLocalStorage.get();
        const objectTicket = {
          IDNguoiDung: _id,
          maHeThongRap: heThongRap.maHeThongRap,
          maCumRap: cumRap.maCumRap,
          maPhim: phim.maPhim,
          ngay,
          gio,
          ghe: selectedSeats,
        };
        dispatch(createTicket(objectTicket));
        dispatch({ type: RESET_SELECTED_SEAT });
      }
    });
  };

  if (!isDisabled) {
    return (
      <>
        <button
          className="fixed bottom-[20px] left-[50%] -translate-x-[50%] bg-[#fca311] text-black rounded-[3px] px-10 py-2 tracking-[10px] font-bold hover:scale-95 cursor-pointer"
          style={{ transition: "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
          disabled={isDisabled}
          onClick={payment}
        >
          XÁC NHẬN ĐẶT VÉ
        </button>
        <Ticket open={open} setOpen={setOpen} />
      </>
    );
  }
};

export default ConfirmBooking;
