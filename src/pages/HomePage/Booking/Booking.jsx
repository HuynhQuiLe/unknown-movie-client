import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByTheater } from "../../../redux/action/theater/getMoviesByTheaterAction";
import moment from "moment";
import {
  setCumRap,
  setHeThongRap,
  setPhim,
} from "../../../redux/action/booking/bookingAction";
import {
  SET_GIO,
  SET_NGAY,
} from "../../../redux/constant/booking/bookingConstants";

const Booking = () => {
  const { moviesByTheater } = useSelector(
    (state) => state.getMoviesByTheaterReducer
  );
  const dispatch = useDispatch();
  // const onChange = (key) => {
  //   console.log(key);
  // };

  useEffect(() => {
    dispatch(getMovieByTheater());
  }, [dispatch]);

  const handleDatVe = (heThongRap, cumRap, phim, ngay, gio) => {
    const { maHeThongRap, logo } = heThongRap;
    const { maCumRap, tenCumRap, diaChi } = cumRap;
    const { _id, tenPhim, maPhim } = phim;

    const heThongRapObject = { maHeThongRap, logo };
    const cumRapObject = { maCumRap, tenCumRap, diaChi };
    const phimObject = { _id, tenPhim, maPhim };
    dispatch(setPhim(phimObject));
    dispatch(setHeThongRap(heThongRapObject));
    dispatch(setCumRap(cumRapObject));
    console.log(gio);
    dispatch({ type: SET_NGAY, payload: ngay });
    dispatch({ type: SET_GIO, payload: gio });
    // window.location.href = "/movies/booking";
    const index = window.location.href.indexOf("#");
    if (window.location.href.indexOf("#") !== -1) {
      const cut = window.location.href.slice(index);
      window.open(
        `${window.location.href.replace(cut, "")}movies/booking`,
        "_blank"
      );
    }
    window.open(`${window.location.href}movies/booking`, "_blank");
  };

  const renderPhim = (heThongRap, cumRap, dsPhim) => {
    return dsPhim.map((phim, index) => {
      return (
        <div
          key={index}
          className={index === dsPhim.length - 1 ? "flex" : "flex mb-10"}
        >
          <img
            src={phim.hinhChinh}
            className="w-[150px] h-[225px] object-cover mr-4 rounded-[3px]"
            alt="phim"
          />

          <div>
            <p
              className="text-[15px] max-w-[255px] tracking-[5px] font-bold uppercase text-black"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {phim.tenPhim}
            </p>
            <div className="text-gray-900 font-thin flex items-center">
              <p className="mr-3">{moment(phim?.khoiChieu).format("yyyy")}</p>
              <div className="w-[1px] h-[15px] bg-gray-500"></div>
              <p className="mx-3">{phim?.thoiLuong} Phút</p>
              <div className="w-[1px] h-[15px] bg-gray-500"></div>
              <p className="mx-3">{phim?.doiTuong}</p>
            </div>
            <div className="mt-2">
              {phim.listLichChieu.map((lich, index) => {
                return (
                  <div key={index} className="mb-3">
                    <p className="text-black">{lich.ngay}</p>

                    <div className="flex flex-wrap">
                      {lich.gio.map((gio, idx) => {
                        return (
                          <p
                            key={idx}
                            className=" text-black hover:scale-95 relative bg-[#fca311] font-bold rounded-[3px] w-[65px] text-center py-1 mr-1 mb-1 cursor-pointer "
                            style={{
                              transition:
                                "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)",
                            }}
                            onClick={() =>
                              handleDatVe(
                                heThongRap,
                                cumRap,
                                phim,
                                lich.ngay,
                                gio
                              )
                            }
                          >
                            {gio}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  const heThongRap = () => {
    return moviesByTheater?.map((item, index) => {
      return {
        key: index,
        label: <img src={item.logo} className="w-[50px]" key={index} />,
        children: (
          <Tabs
            className=" max-h-[500px] overflow-scroll"
            tabPosition="left"
            defaultActiveKey="1"
            items={item.danhSachCumRap.map((itm, ind) => {
              return {
                key: ind,
                label: (
                  <div className="text-left w-[400px]">
                    <h5
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      className="text-[#fca311]"
                    >
                      {itm.tenCumRap}
                    </h5>
                    <p
                      className="text-gray-600 font-light"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {itm.diaChi}
                    </p>
                  </div>
                ),
                children: (
                  <div className="max-h-[500px] overflow-scroll">
                    {renderPhim(
                      item,
                      itm,
                      ind % 2 === 0
                        ? itm.danhSachPhim
                        : itm.danhSachPhim.reverse()
                    )}
                  </div>
                ),
              };
            })}
            // onChange={onChange}
          />
        ),
      };
    });
  };
  return (
    <div className="pb-[80px] booking">
      <div className="py-[60px] text-center text-[45px]" id="booking">
        <h2>Đặt vé</h2>
      </div>
      <div className="max-h-[500px] max-w-[1024px] m-auto">
        <Tabs
          tabPosition="left"
          defaultActiveKey="1"
          items={heThongRap()}
          // onChange={onChange}
          className="max-h-[500px] overflow-scroll"
        />
      </div>
    </div>
  );
};

export default Booking;
