import React from "react";
import Rows from "./Rows/Rows";
import { useSelector } from "react-redux";
const SeatLayout = () => {
  const { layoutGheByMaSuatChieu } = useSelector(
    (state) => state.getLayoutGheByMaSuatChieuReducer
  );
  return (
    <div className="mt-[20px] max-w-[1240px] m-auto pb-[150px]">
      <div className="h-[30px] w-full text-black leading-[30px] tracking-[10px] font-bold mb-[20px] text-center bg-[#fca311] rounded-[3px]">
        <p>🖥️ MÀN HÌNH 🖥️</p>
      </div>
      {layoutGheByMaSuatChieu?.seatMap.map((hangGhe, index) => {
        if (hangGhe.hang) {
          return <Rows key={index} hangGhe={hangGhe} />;
        }
      })}
    </div>
  );
};

export default SeatLayout;
