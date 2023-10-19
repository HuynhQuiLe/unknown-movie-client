import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/action/user/loginAction";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const { isLoading } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login(values));
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
      initialValues={{
        duyTriDangNhap: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="text-center w-[100%] mb-4 text-[40px]">Đăng nhập</h1>
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

      <div className="flex justify-between items-start">
        <Form.Item
          name="duyTriDangNhap"
          valuePropName="checked"
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
        >
          <Checkbox className=" text-white">Duy trì đăng nhập</Checkbox>
        </Form.Item>

        <NavLink to="/register" className=" mt-1 hover:text-[#fca311]">
          Đăng ký tài khoản
        </NavLink>
      </div>

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
          disabled={isLoading}
          style={{ transition: "all .1s cubic-bezier(0.42, 0, 0.58, 1.0)" }}
        >
          ĐĂNG NHẬP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
