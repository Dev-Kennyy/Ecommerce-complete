import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import SignInput from "../../components/SignInput";
import { useAuth } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, emailOrPhone, password } = formData;

    if (!name || !emailOrPhone || !password) {
      toast.error("Invalid details, kindly enter correct details!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const userExists = storedUsers.some(
      (user) => user.emailOrPhone === emailOrPhone,
    );

    if (userExists) {
      toast.error("User already exists. Please log in instead.", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    const newUser = { name, emailOrPhone, password };
    storedUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));

    login({ name, emailOrPhone });
    navigate("/");
  };

  return (
    <div>
      <LoginHeader h1="Create an account" p="Enter your details below" />
      <div className="flex flex-col gap-9">
        <SignInput
          name="name"
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <SignInput
          name="emailOrPhone"
          placeholder="Email / Phone"
          type="text"
          onChange={handleChange}
        />
        <SignInput
          name="password"
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
      <ToastContainer />
    </div>
  );
}

export default SignUpForm;
