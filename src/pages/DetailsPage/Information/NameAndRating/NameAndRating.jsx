import React from "react";
import { Progress } from "antd";
import moment from "moment";

const NameAndRating = ({ movie }) => {
  return (
    <div className="flex items-end justify-between w-[100%] mb-[50px]">
      <div className="w-full">
        <h2 className="text-[35px] tracking-[10px] mb-3">
          {movie?.tenPhim.toUpperCase()}
        </h2>

        <div className="flex justify-between items-center w-ful">
          <div>
            <div className="text-gray-500 font-thin flex items-center">
              <p className="mr-5">{moment(movie?.khoiChieu).format("yyyy")}</p>
              <div className="w-[1px] h-[15px] bg-gray-500"></div>
              <p className="mx-5">{movie?.chiTiet?.thoiLuong} Phút</p>
              <div className="w-[1px] h-[15px] bg-gray-500"></div>
              <p className="mx-5">{movie?.doiTuong}</p>
              <div className="w-[1px] h-[15px] bg-gray-500"></div>
              <p className="ml-5 text-[#fca311]">
                {moment(movie?.khoiChieu).isSameOrBefore(new Date())
                  ? "Phim đang chiếu"
                  : "Phim sắp chiếu"}
              </p>
            </div>
          </div>
          <div className="text-[30px] flex items-center font-bold">
            <span>{movie?.chiTiet?.danhGia?.diem}</span>
            <img
              src="/img/Star_icon_stylized.svg.png"
              className="w-[30px] ml-3"
              alt="star icon"
            />
          </div>
        </div>
      </div>
      {/* <Progress
        format={() => (
          <span className="text-red-600">{movie?.danhGia} Điểm</span>
        )}
        type="circle"
        strokeWidth={1}
        strokeColor={"red"}
        trailColor={"red"}
        percent={movie?.danhGia * 10}
      /> */}
    </div>
  );
};

export default NameAndRating;
