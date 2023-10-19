import React from "react";

const Poster = ({ hinhChinh }) => {
  return (
    <div className="h-[70vh] w-auto relative">
      <div className=" absolute w-full h-[100px] top-0 left-0 bg-bg_linear_deatils_poster_top"></div>
      <img src={hinhChinh} className="h-full w-auto" alt="hinh poster" />
      <div className=" absolute w-full h-[100px] bottom-0 left-0 bg-bg_linear_deatils_poster_bottom"></div>
    </div>
  );
};

export default Poster;
