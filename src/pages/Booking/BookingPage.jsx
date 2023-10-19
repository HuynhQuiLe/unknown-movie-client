import React, { useEffect } from "react";
import MovieNameAndTheater from "./MovieNameAndTheater/MovieNameAndTheater";
import TimeAndLegend from "./TimeAndLegend/TimeAndLegend";
import SeatLayout from "./SeatLayout/SeatLayout";
import PageTransition from "../../components/PageTransition/PageTransition";
import ConfirmBooking from "./ConfirmBooking/ConfirmBooking";
import { useDispatch, useSelector } from "react-redux";
import { createSeatLayout } from "../../redux/action/seat/createSeatLayoutAction";
import { getLayoutGheByMaSuatChieu } from "../../redux/action/seat/getLayoutGheByMaSuatChieuAction";

const BookingPage = () => {
  const dispatch = useDispatch();
  const { phim, heThongRap, cumRap, ngay, gio } = useSelector(
    (state) => state.bookingReducer
  );

  const { maPhim } = phim;
  const { maHeThongRap } = heThongRap;
  const { maCumRap } = cumRap;

  useEffect(() => {
    document.title = `Unknown® - Đặt vé`;
    const maSuatChieu = `${cumRap.maCumRap}${phim.maPhim
      .toString()
      .replace(".", "")}${ngay.replaceAll("/", "")}${gio.replace(":", "")}`;
    dispatch(
      createSeatLayout(maPhim, maHeThongRap, maCumRap, ngay, gio, maSuatChieu)
    ).then((result) => {
      if (result) {
        dispatch(getLayoutGheByMaSuatChieu(maSuatChieu));
      }
    });
  }, []);
  return (
    <>
      <div className="text-white h-[100vh] overflow-scroll">
        <MovieNameAndTheater />
        <div className="mt-5">
          <TimeAndLegend />
          <SeatLayout />
        </div>
      </div>
      <PageTransition text="ĐẶT VÉ" pageNumber={3} />
      <ConfirmBooking />
    </>
  );
};

export default BookingPage;
