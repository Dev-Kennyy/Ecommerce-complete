import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function CartTable() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <tr>
        <td colSpan="4" className="py-4 text-center text-gray-500">
          Your cart is empty.
        </td>
      </tr>
    );
  }

  return (
    <>
      {cartItems.map((item) => (
        <tr key={item.id} className="border-b hover:bg-gray-50">
          <td className="flex items-center gap-3 px-4 py-2">
            <img
              src={item.image || item.images?.[0]}
              alt={item.title}
              className="h-10 w-10 object-cover"
            />
            <span>{item.title}</span>
          </td>
          <td className="px-4 py-2">${item.price}</td>
          <td className="px-4 py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="rounded border px-2 text-lg font-bold"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="rounded border px-2 text-lg font-bold"
              >
                +
              </button>
            </div>
          </td>
          <td className="flex items-center gap-4 px-4 py-2">
            ${(item.price * item.quantity).toFixed(2)}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CartTable;
