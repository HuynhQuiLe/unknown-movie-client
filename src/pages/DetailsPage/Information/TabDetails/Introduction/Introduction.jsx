import moment from "moment";
import React from "react";

const Introduction = ({ movie }) => {
  const renderHinhAnh = () => {
    return movie?.hinhPhu.map((image, index) => {
      return (
        <img
          key={index}
          src={image}
          className="h-[150px] w-auto mr-3 rounded-[3px]"
          alt="hinh anh minh hoa"
        />
      );
    });
  };
  return (
    <div>
      <p className=" font-light mb-4">{movie?.moTa}</p>
      <div className="mt-1">
        <span className="font-bold text-gray-500 mr-1">Đạo diễn:</span>
        <span>{movie?.chiTiet?.daoDien}</span>
      </div>
      <div className="mt-1">
        <span className="font-bold text-gray-500 mr-1">Diễn viên:</span>
        <span>{movie?.chiTiet?.dienVien}</span>
      </div>
      <div className="mt-1">
        <span className="font-bold text-gray-500 mr-1">Thể loại phim:</span>
        <span>{movie?.theLoai}</span>
      </div>
      <div className="mt-1">
        <span className="font-bold text-gray-500 mr-1">Khởi chiếu:</span>
        <span>{moment(movie?.khoiChieu).format("DD-MM-YYYY")}</span>
      </div>
      <div className="mt-1 ">
        <p className="mb-[10px] font-bold text-gray-500 ">
          Hình ảnh liên quan:
        </p>
        <div className="flex w-full overflow-x-scroll flex-nowrap">
          {movie?.hinhPhu && renderHinhAnh()}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
