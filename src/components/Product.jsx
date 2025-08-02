import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useAuth } from "../context/AuthContext"; // ✅
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Product({ productdata }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { user } = useAuth(); // ✅
  const navigate = useNavigate("");
  if (!productdata) return null;

  const { id, title, price, image } = productdata;

  const isInCart = cartItems.some((item) => item.id === id);
  const shortTitle = title.split(" ").slice(0, 3).join(" ");

  // Random discount between 10% - 30%
  const percentageOff = Math.floor(Math.random() * 21) + 10; // 10 to 30

  const originalPrice = price / (1 - percentageOff / 100);

  return (
    <div className="relative cursor-pointer border bg-gray-50 p-2 shadow-2xl">
      <img src={image} alt={title} className="h-48 w-96 object-contain" />

      <div
        className={`w-full text-center text-sm text-white ${
          isInCart ? "cursor-not-allowed bg-gray-400" : "bg-black"
        }`}
        onClick={() => {
          if (!user) {
            navigate("/login");
            // <ToastContainer />;
            // t("Please login to add items to cart.");
            return;
          }
          if (!isInCart) dispatch(addToCart(productdata));
        }}
      >
        {isInCart ? "In Cart" : "Add To Cart"}
      </div>

      <div className="pr-16 text-left">
        <h2 className="pt-2 text-sm font-semibold">{shortTitle}</h2>

        <div className="flex items-center gap-2">
          <p className="text-[#DB4444]">${price.toFixed(2)}</p>
          <span className="text-sm text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        <span>⭐⭐⭐⭐⭐</span>

        <button className="absolute right-0 top-0 rounded bg-[#DB4444] p-1 text-[10px] font-extralight text-white">
          -{percentageOff}%
        </button>
      </div>
    </div>
  );
}

export default Product;
