import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const { selectedSeats } = useSelector((state) => state.bookingReducer);

  let totalPrice = 0;
  let totalGhe = 0;

  if (selectedSeats.length) {
    totalGhe = selectedSeats.length;
    selectedSeats.map((seat) => {
      totalPrice += seat.gia;
    });
  }

  return (
    <div className="text-white">
      <div className="flex items-end">
        <div className="text-[35px] font-bold relative">
          {totalPrice.toLocaleString()}
          <div className="absolute w-[70px] -top-[20%] -right-[55px]">
            <video
              src="/video/OBJECT-FX_001_CLEAN_1-hevc-safari.mp4"
              autoPlay
              muted
              loop
              className="w-full"
            />
          </div>
        </div>

        <p className="text-[20px] font-thin ml-[40px] text-gray-400">
          {" "}
          - {totalGhe} ghế
        </p>
      </div>
    </div>
  );
};

export default TotalPrice;
