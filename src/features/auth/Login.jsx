import React from "react";
import logo from "../../assets/images/banner9van.png";
import googleicon from "../../assets/images/googleicon.png";
import facebookicon from "../../assets/images/facebookicon.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-200 w-screen h-screen flex justify-center place-items-center">
      <div className="bg-gray-100 w-3/4 h-3/4 rounded-2xl flex flex-col justify-start place-items-center">
        <img src={logo} alt="" className="w-44 h-12 mt-10" />
        <span className="text-xl text-green-400 font-bold mt-3">
          Luyện viết văn hay - Chấm bài thông minh
        </span>
        <span className="text-xl text-gray-400 font-semibold mt-24">
          Chào mừng đã đến với 9Văn
        </span>
        <Button
          sx={{
            marginTop: 5,
            marginBottom: 2,
            backgroundColor: "white",
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: 2,
          }}
          startIcon={<img src={googleicon} className="w-8 h-8" alt="" />}
          onClick={() => navigate("/role")}
        >
          Đăng nhập bằng Google
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: 2,
          }}
          startIcon={<img src={facebookicon} className="w-8 h-8" alt="" />}
          onClick={() => navigate("/role")}
        >
          Đăng nhập bằng Facebook
        </Button>
        <a href="" className=" font-semibold text-green-600 mt-16">
          Giới thiệu
        </a>
        <a href="" className=" font-semibold text-green-600">
          Chính sách & Điều khoản
        </a>
      </div>
    </div>
  );
};

export default Login;
