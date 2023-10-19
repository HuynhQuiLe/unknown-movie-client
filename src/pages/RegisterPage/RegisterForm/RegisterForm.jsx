import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../../../redux/action/user/registerAction";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(register(values)).then((result) => {
      if (result) navigate("/login");
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      style={{
        maxWidth: 600,
        width: "30%",
        color: "white",
        margin: "10vh auto 0",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="text-center w-[100%] mb-4 text-[40px]">Đăng ký</h1>
      <Form.Item
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Tài khoản không được để trống!",
          },
        ]}
      >
        <Input
          placeholder="Tài khoản"
          className="h-[45px] text-[16px]"
          autoComplete="false"
        />
      </Form.Item>

      <Form.Item
        name="ten"
        rules={[
          {
            required: true,
            message: "Tên người dùng không được để trống!",
          },
        ]}
      >
        <Input
          placeholder="Tên người dùng"
          className="h-[45px] text-[16px]"
          autoComplete="false"
        />
      </Form.Item>

      <Form.Item
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Mật khẩu không được để trống!",
          },
        ]}
      >
        <Input.Password
          placeholder="Mật khẩu"
          className="h-[45px] text-[16px]"
          autoComplete="false"
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Email không đúng định dạng!",
          },
          {
            required: true,
            message: "Email không được để trống!",
          },
        ]}
      >
        <Input
          placeholder="Email"
          className="h-[45px] text-[16px]"
          autoComplete="false"
        />
      </Form.Item>

      <p className="mb-5">
        Đã có tài khoản?{" "}
        <NavLink className=" mt-1 hover:text-[#fca311] underline" to="/login">
          Đăng nhập
        </NavLink>
      </p>

      <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
        className="text-center"
      >
        <Button
          type="primary"
          className=" bg-white text-black text-[16px] leading-[16px] w-[250px] h-[40px] button_login_register tracking-[10px] font-bold hover:scale-95"
          htmlType="submit"
          style={{ transition: "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
          disabled={isLoading}
        >
          ĐĂNG KÝ
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
