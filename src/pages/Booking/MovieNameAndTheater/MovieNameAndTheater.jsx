import React from "react";
import { useSelector } from "react-redux";
import TotalPrice from "../TotalPrice/TotalPrice";

const MovieNameAndTheater = () => {
  const { phim, heThongRap, cumRap } = useSelector(
    (state) => state.bookingReducer
  );
  return (
    <div>
      <h2 className="text-[35px] tracking-[10px] mb-3 text-[#fca311]">
        <p>{phim?.tenPhim.toUpperCase()}</p>
      </h2>
      <div className=" font-thin text-gray-400 flex justify-between items-end">
        <div>
          <div className="flex items-end">
            <img src={heThongRap?.logo} className="w-[30px] mr-3" alt="logo" />
            <p> {cumRap?.tenCumRap} - Rạp 6</p>
          </div>
          <p>{cumRap?.diaChi}</p>
        </div>
        <TotalPrice />
      </div>
    </div>
  );
};

export default MovieNameAndTheater;
