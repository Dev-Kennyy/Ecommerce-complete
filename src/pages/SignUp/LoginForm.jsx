import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import SignInput from "../../components/SignInput";
import { useAuth } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { emailOrPhone, password } = formData;

    if (!emailOrPhone || !password) {
      toast.error("Please enter both email/phone and password.");
      return;
    }

    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const matchedUser = storedUsers.find(
      (user) =>
        user.emailOrPhone === emailOrPhone && user.password === password,
    );

    if (!matchedUser) {
      toast.error("Invalid credentials. Please try again.");
      return;
    }

    // Log in
    login({ name: matchedUser.name, emailOrPhone: matchedUser.emailOrPhone });
    toast.success(`Welcome back, ${matchedUser.name}!`);
    navigate("/");
  };

  return (
    <div>
      <LoginHeader h1="Login to Exclusive Store" p="Enter your details below" />
      <div className="flex flex-col gap-9">
        <SignInput
          name="emailOrPhone"
          placeholder="email / phone"
          type="text"
          onChange={handleChange}
        />
        <SignInput
          name="password"
          placeholder="password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <div className="mt-10 flex items-center justify-between gap-8">
        <div
          className="cursor-pointer whitespace-nowrap rounded bg-[#DB4444] p-2 px-4 text-white"
          onClick={handleLogin}
        >
          Log In
        </div>
        <p
          className="cursor-pointer whitespace-nowrap text-sm text-[#DB4444]"
          onClick={() => navigate("/signup")}
        >
          No Account? Sign Up here...➡️
        </p>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default LoginForm;
