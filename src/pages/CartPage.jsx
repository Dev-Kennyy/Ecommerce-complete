import { useNavigate } from "react-router-dom";
import CartTable from "../components/CartTable";
import { useSelector } from "react-redux";

function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log("Cart Items:", cartItems);

  return (
    <div className="p-8">
      <div className="mb-4 text-sm text-gray-600">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        / <span className="text-black">Cart</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr className="">
              <th className="border-b px-10 py-2">Product</th>
              <th className="border-b px-4 py-2">Price</th>
              <th className="border-b px-4 py-2">Quantity</th>
              <th className="border-b px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <CartTable />
          </tbody>
        </table>

        {Array.isArray(cartItems) && cartItems.length > 0 && (
          <button
            className="m-4 cursor-pointer bg-[#DB4444] p-2 pt-3 text-white"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default CartPage;
