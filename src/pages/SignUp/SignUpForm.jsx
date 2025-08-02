// src/pages/SignUp/SignUpForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import SignInput from "../../components/SignInput";
import { useAuth } from "../../context/AuthContext";

function SignUpForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder]: e.target.value });
  };

  const handleSubmit = () => {
    const userData = {
      name: formData["Name"],
      email: formData["Email / Phone Number"],
    };

    login(userData);
    navigate("/");
  };

  return (
    <div>
      <LoginHeader h1="Create an account" p="Enter your details below" />
      <div className="flex flex-col gap-9">
        <SignInput placeholder="Name" type="text" onChange={handleChange} />
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

        <button
          className="rounded-sm bg-[#DB4444] p-4 text-sm text-white"
          onClick={handleSubmit}
        >
          Create Account
        </button>

        <button className="flex items-center justify-center gap-4 rounded-sm border bg-transparent p-4 text-sm text-black">
          <img src="Icon-Google.png" alt="" /> <span>Sign Up with Google</span>
        </button>

        <p className="text-gray-500">
          Already have an account?
          <span
            className="cursor-pointer pl-3 text-black underline hover:text-[#DB4444]"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
