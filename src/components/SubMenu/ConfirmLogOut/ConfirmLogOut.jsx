import React, { useState } from "react";
import { Button, Modal } from "antd";
const ConfirmLogOut = ({ open, setOpen, logoutAccount }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    <div>
      <p>
        Bạn chắc chắn muốn{" "}
        <span className="text-red-600 font-bold">đăng xuất</span>?
      </p>
      <p>
        Thao tác tiếp theo sẽ làm <b>load lại trang</b>!
      </p>
    </div>
  );
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("Bạn sẽ đăng xuất sau 2 giây. Vui lòng chờ!");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      logoutAccount();
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Xác nhận đăng xuất"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default ConfirmLogOut;
