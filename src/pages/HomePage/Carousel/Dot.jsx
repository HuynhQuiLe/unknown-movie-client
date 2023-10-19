import React from "react";

const Dot = ({ color }) => {
  return (
    <div>
      <div
        className="w-[8px] h-[8px] rounded-full m-[7px] carousel__dot transition-all duration-500"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Dot;
