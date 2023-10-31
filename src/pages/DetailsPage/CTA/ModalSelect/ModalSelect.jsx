import React, { useEffect, useState } from "react";
import { Modal, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheaters } from "../../../../redux/action/theater/getAllTheatersAction";
import { getAllCumRaps } from "../../../../redux/action/branch/getAllCumRapsAction";
import {
  setCumRap,
  setHeThongRap,
} from "../../../../redux/action/booking/bookingAction";
import {
  SET_GIO,
  SET_NGAY,
} from "../../../../redux/constant/booking/bookingConstants";

const ModalSelect = ({ isModalOpen, setIsModalOpen }) => {
  const [maHeThongRap, setMaHeThongRap] = useState(null);
  const [maCumRap, setMaCumRap] = useState(null);
  const dispatch = useDispatch();
  const { theaters } = useSelector((state) => state.getAllTheatersReducer);
  const { branches } = useSelector((state) => state.getAllCumRapsReducer);
  const { moviesByTheater } = useSelector(
    (state) => state.getMoviesByTheaterReducer
  );
  const { movie } = useSelector((state) => state.movieDetailsReducer);
  const [isDisabledCR, setIsDisabledCR] = useState(true);

  useEffect(() => {
    dispatch(getAllTheaters());
    dispatch(getAllCumRaps());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleOk = () => {
    if (maHeThongRap && maCumRap) {
      // set defaul value for ngay
      let ngay = "";
      let gio = "";

      moviesByTheater.map((HTRap) => {
        if (HTRap.maHeThongRap === maHeThongRap) {
          HTRap.danhSachCumRap.map((CR) => {
            if (CR.maCumRap === maCumRap) {
              CR.danhSachPhim.map((film) => {
                if (film.maPhim === movie.maPhim) {
                  ngay = film.listLichChieu[0].ngay;
                  gio = film.listLichChieu[0].gio[0];
                }
              });
            }
          });
        }
      });
      if (ngay === "" || gio === "") {
        return message.error("Rạp không có suất chiếu phim này. Mời chọn lại!");
      }
      navigate("/movies/booking");
      setIsModalOpen(false);

      dispatch({
        type: SET_NGAY,
        payload: ngay,
      });

      dispatch({
        type: SET_GIO,
        payload: gio,
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeHTR = (value) => {
    if (value) {
      setIsDisabledCR(false);
      setMaHeThongRap(value);
      setMaCumRap(null);
      const tenHeThongRap = theaters.filter(
        (item) => item.maHeThongRap === value
      )[0].tenHeThongRap;
      const logo = theaters.filter((item) => item.maHeThongRap === value)[0]
        .logo;
      dispatch(
        setHeThongRap({
          maHeThongRap: value,
          tenHeThongRap,
          logo,
        })
      );
    }
  };

  const onChangeCR = (value) => {
    if (value) {
      setMaCumRap(value);
      const tenCumRap = branches.filter((item) => item.maCumRap === value)[0]
        .tenCumRap;
      const diaChi = branches.filter((item) => item.maCumRap === value)[0]
        .diaChi;
      dispatch(
        setCumRap({
          maCumRap: value,
          tenCumRap,
          diaChi,
        })
      );
    }
  };

  // // Filter `option.label` match the user type `input`
  // const filterOption = (input, option) =>
  //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Modal
      title="Vui lòng chọn:"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="flex">
        <Select
          className="mr-1 w-1/2"
          placeholder="Chọn hệ thống rạp"
          optionFilterProp="children"
          onChange={onChangeHTR}
          // filterOption={filterOption}
          value={maHeThongRap}
          options={theaters?.map((theater) => {
            return {
              value: theater.maHeThongRap,
              label: (
                <div className="flex items-center">
                  <img
                    src={theater.logo}
                    className="w-[25px] mr-3"
                    alt="logo"
                  />
                  <p>{theater.tenHeThongRap}</p>
                </div>
              ),
            };
          })}
        />

        <Select
          className="ml-1 w-1/2"
          placeholder="Chọn cụm rạp"
          optionFilterProp="children"
          onChange={onChangeCR}
          // filterOption={filterOption}
          disabled={isDisabledCR}
          value={maCumRap}
          options={branches
            ?.filter((item) => item.maHeThongRap === maHeThongRap)
            .map((branch) => {
              return {
                value: branch.maCumRap,
                label: branch.tenCumRap,
              };
            })}
        />
      </div>
    </Modal>
  );
};

export default ModalSelect;
