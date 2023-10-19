import React, { useState } from "react";
import ModalSelect from "./ModalSelect/ModalSelect";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div
        className=" fixed bottom-[20px] left-[50%] -translate-x-[50%] bg-[#fca311] text-black rounded-[3px] px-10 py-2 tracking-[10px] font-bold hover:scale-95 cursor-pointer"
        style={{ transition: "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
        onClick={showModal}
      >
        ĐẶT VÉ NGAY
      </div>
      <ModalSelect isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CTA;
