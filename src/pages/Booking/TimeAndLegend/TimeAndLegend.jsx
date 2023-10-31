import React, { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_GIO,
  SET_NGAY,
} from "../../../redux/constant/booking/bookingConstants";

const TimeAndLegend = () => {
  const { heThongRap, cumRap, ngay, gio, phim } = useSelector(
    (state) => state.bookingReducer
  );

  const { moviesByTheater } = useSelector(
    (state) => state.getMoviesByTheaterReducer
  );

  const dispatch = useDispatch();

  const handleChangeDataSeatMap = () => {
    window.location.href = "/movies/booking";
  };

  return (
    <div className="flex justify-between items-center">
      <div className="text-[25px] flex items-center">
        <div className="flex items-center mr-5">
          <div className="mr-2">
            <SlCalender />
          </div>

          <select
            name="ngay"
            id="ngay"
            className=" bg-black outline-none  min-w-[100px] text-[25px] cursor-pointer"
            value={ngay}
            onChange={(e) => {
              dispatch({
                type: SET_NGAY,
                payload: e.target.value,
              });
              setTimeout(() => {
                handleChangeDataSeatMap();
              }, 100);
            }}
          >
            {moviesByTheater.map((HTRap) => {
              if (HTRap.maHeThongRap === heThongRap.maHeThongRap) {
                return HTRap.danhSachCumRap.map((CR) => {
                  if (CR.maCumRap === cumRap.maCumRap) {
                    return CR.danhSachPhim.map((film) => {
                      if (film.maPhim === phim.maPhim) {
                        return film.listLichChieu.map((item, index) => {
                          return (
                            <option key={index} value={item.ngay}>
                              {item.ngay}
                            </option>
                          );
                        });
                      }
                    });
                  }
                });
              }
            })}
          </select>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <BsClock />
          </div>
          <select
            name="time"
            id="gio"
            className=" bg-black outline-none  min-w-[100px] text-[25px] cursor-pointer"
            value={gio}
            onChange={(e) => {
              dispatch({
                type: SET_GIO,
                payload: e.target.value,
              });
              handleChangeDataSeatMap();
            }}
          >
            {moviesByTheater.map((HTRap) => {
              if (HTRap.maHeThongRap === heThongRap.maHeThongRap) {
                return HTRap.danhSachCumRap.map((CR) => {
                  if (CR.maCumRap === cumRap.maCumRap) {
                    return CR.danhSachPhim.map((film) => {
                      if (film.maPhim === phim.maPhim) {
                        return film.listLichChieu.map((date) => {
                          if (date.ngay === ngay) {
                            return date.gio.map((hour, index) => {
                              return (
                                <option key={index} value={hour}>
                                  {hour}
                                </option>
                              );
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            })}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center mr-10">
          <div className="w-[20px] h-[20px] bg-black border-1 border border-white rounded-[3px] mr-2"></div>
          <p>Đã đặt</p>
        </div>

        <div className="flex items-center mr-10">
          <div className="w-[20px] h-[20px] bg-[#fca311] rounded-[3px] mr-2"></div>
          <p>Đang chọn</p>
        </div>

        <div className="flex items-center justify-end">
          <div className="w-[20px] h-[20px] bg-white rounded-[3px] mr-2"></div>
          <p>Trống</p>
        </div>
      </div>
    </div>
  );
};

export default TimeAndLegend;
