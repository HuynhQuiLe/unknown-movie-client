import React from "react";
import Seat from "../Seat/Seat";

const Rows = ({ hangGhe }) => {
  return (
    <div className="flex justify-between mb-3">
      {hangGhe.danhSachGhe.map((ghe, ind) => {
        return <Seat ghe={ghe} key={ind} />;
      })}
    </div>
  );
};

export default Rows;
