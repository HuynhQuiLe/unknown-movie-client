import React from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";

const Ticket = ({ open, setOpen }) => {
  const { selectedSeats, phim, heThongRap, cumRap, ngay, gio } = useSelector(
    (state) => state.bookingReducer
  );
  const { moviesByTheater } = useSelector(
    (state) => state.getMoviesByTheaterReducer
  );

  const renderPoster = () => {
    let src = "";
    moviesByTheater.map((item) => {
      if (item.maHeThongRap === heThongRap.maHeThongRap) {
        item.danhSachCumRap.map((it) => {
          if (it.maCumRap === cumRap.maCumRap) {
            it.danhSachPhim.map((ite) => {
              if (ite.maPhim == phim.maPhim) {
                src = ite.hinhChinh;
              }
            });
          }
        });
      }
    });
    return src;
  };
  return (
    <>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        className=" bg-transparent"
      >
        <div className="w-full min-h-[100px] relative overflow-visible">
          <img
            src="/img/Ticket.png"
            alt="ticket"
            className="w-[952px] h-[647px] object-cover m-auto absolute top-[-250%] rotate-[20deg] left-0"
          />

          <div className="absolute top-[-120px] left-[80px] flex">
            <div>
              <img
                // src="https://chris27-next-ecommerce.s3.amazonaws.com/1695980430235.jpg"
                src={renderPoster()}
                alt="poster"
                className="w-[200px] h-[300px] object-cover"
              />
              <div className="w-[200px] h-[55px] bg-white flex items-center justify-center mt-3 relative">
                <img
                  src="/img/6503162891545151988.png"
                  className="w-[200px] h-[48px]"
                  alt="barcode"
                />
                <p className="absolute bottom-0 left-[50%] -translate-x-[50%] bg-white text-[8px] min-w-[150px] text-center tracking-[4px] font-bold">
                  {Date.now()}
                </p>
              </div>
            </div>
            <div className="ml-5 max-w-[500px]">
              <p
                className="text-[25px] text-[#FCA311]  tracking-[10px] mb-5 font-bold "
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textTransform: "uppercase",
                }}
              >
                {phim.tenPhim}
              </p>
              <div className="flex items-center justify-start">
                <img src={heThongRap.logo} alt="logo" className="w-[60px]" />
                <div className="ml-3">
                  <p className="text-[20px] font-bold">{cumRap.tenCumRap}</p>
                  <p
                    className=" font-light"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "450px",
                    }}
                  >
                    {cumRap.diaChi}
                  </p>
                </div>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]"> 🎥</span>
                <span className="text-[18px]">Rạp 6</span>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]">💺</span>

                <span className="text-[18px]">
                  {selectedSeats.map((item, index) => {
                    return (
                      <span key={index}>
                        {index === 0 ? item.soGhe : `, ${item.soGhe}`}
                      </span>
                    );
                  })}
                </span>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]">🗓️</span>
                <span className="text-[18px]">{ngay}</span>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]">⏰</span>
                <span className="text-[18px]">{gio}</span>
              </div>
              <p className="text-[16px] italic text-gray-500 mt-3">
                Vui lòng lưu lại vé và đưa mã vạch vào máy quét để tự in vé.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Ticket;
