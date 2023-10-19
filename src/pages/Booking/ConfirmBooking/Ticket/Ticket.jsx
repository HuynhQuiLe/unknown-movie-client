import React from "react";
import { Modal } from "antd";

const Ticket = ({ open, setOpen }) => {
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
                src="https://chris27-next-ecommerce.s3.amazonaws.com/1695980430235.jpg"
                alt="poster"
                className="w-[200px] h-[300px] object-cover"
              />
              <div className="w-[200px] h-[55px] bg-white flex items-center justify-center mt-3 relative">
                <img
                  src="/img/6503162891545151988.png"
                  className="w-[200px] h-[48px]"
                  alt=""
                />
                <p className="absolute bottom-0 left-[50%] -translate-x-[50%] bg-white text-[8px] min-w-[150px] text-center">
                  1
                </p>
              </div>
            </div>
            <div className="ml-5 max-w-[500px]">
              <p
                className="text-[25px] text-[#FCA311]  tracking-[10px] mb-5 font-bold"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                ÁC QUỶ MA SƠ 2
              </p>
              <div className="flex items-center justify-start">
                <img
                  src="https://chris27-next-ecommerce.s3.amazonaws.com/1696150986241.png"
                  alt="logo"
                  className="w-[60px]"
                />
                <div className="ml-3">
                  <p className="text-[20px] font-bold">BHD STAR Long Khánh</p>
                  <p
                    className=" font-light"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "450px",
                    }}
                  >
                    430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh
                    Đồng Nai
                  </p>
                </div>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]"> 🎥</span>
                <span className="text-[18px]">Rạp 6</span>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]">💺</span>

                <span className="text-[18px]">H1, H2</span>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]">🗓️</span>
                <span className="text-[18px]">10/10/2023</span>
              </div>
              <div>
                <span className="w-[40px] inline-block text-[30px]">⏰</span>
                <span className="text-[18px]">14:40</span>
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
