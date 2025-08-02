// src/pages/SignUp/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import SignInput from "../../components/SignInput";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder]: e.target.value });
  };

  const handleLogin = () => {
    const userData = {
      name: "Kendi Blessing", // hardcoded for now
      email: formData["Email / Phone Number"],
    };

    login(userData);
    navigate("/");
  };

  return (
    <div>
      <LoginHeader h1="Login to Exclusive Store" p="Enter your details below" />
      <div className="flex flex-col gap-9">
        <SignInput
          placeholder="Email / Phone Number"
          type="text"
          onChange={handleChange}
        />
        <SignInput
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div
          className="cursor-pointer rounded bg-[#DB4444] p-2 px-4 text-white"
          onClick={handleLogin}
        >
          Log In
        </div>
        <p className="cursor-pointer text-[#DB4444]">Forgot Password?</p>
      </div>
    </div>
  );
}

export default LoginForm;
