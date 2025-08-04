import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import CartItem from "../components/CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";

function PaymentPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form states
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Validate form
  const isFormValid = firstName && address && city && phone && email;

  function handlePlaceOrder() {
    if (!isFormValid) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    dispatch(clearCart());

    toast.success("Order Successfully Placed!", {
      position: "top-right",
      autoClose: 5000,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/");
    }, 5000);
  }

  return (
    <div>
      <div className="p-2 py-7 text-sm text-gray-500">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span className="mx-1">/</span>
        <span>My Account</span>
        <span className="mx-1">/</span>
        <span>Product</span>
        <span className="mx-1">/</span>
        <span className="cursor-pointer" onClick={() => navigate("/cart")}>
          View Cart
        </span>
        <span className="mx-1">/</span>
        <span className="font-medium text-black">CheckOut</span>
      </div>

      <div className="flex flex-col justify-center gap-8 px-3 pt-2 sm:flex-row">
        <div>
          <h1 className="text-2xl">Billing Details</h1>
          <div className="flex flex-col gap-4">
            <PasswordInput
              type="text"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <PasswordInput
              type="text"
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <PasswordInput
              type="text"
              label="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <PasswordInput
              type="text"
              label="Town/City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <PasswordInput
              type="tel"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <PasswordInput
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex gap-2 text-sm">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </div>
        </div>

        <div>
          <CartItem />
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-[#DB4444] p-3 text-white"
          >
            Place Order
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
