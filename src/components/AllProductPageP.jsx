import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function AllProductPageP({ productdata }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // console.log(productdata);
  if (!productdata) return null;

  const { id, title, price, images } = productdata;
  const image = images?.[0];
  const apiSource = "api3"; // or determine this based on prop/context
  const productWithUniqueId = {
    ...productdata,
    id: `${apiSource}-${productdata.id}`,
  };

  // Check if item is in cart
  const isInCart = cartItems.some((item) => item.id === productWithUniqueId.id);

  // Slice title to first 3 words
  const shortTitle = title.split(" ").slice(0, 3).join(" ");

  return (
    <div className="relative cursor-pointer border bg-gray-50 p-2 shadow-2xl hover:scale-100">
      <img src={image} alt={title} className="h-48 w-60" />

      <div
        className={`w-full text-center text-sm text-white ${
          isInCart ? "cursor-not-allowed bg-gray-400" : "bg-black"
        }`}
        onClick={() => {
          if (!isInCart) dispatch(addToCart(productWithUniqueId));
        }}
      >
        {isInCart ? "In Cart" : "Add To Cart"}
      </div>

      <div className="pr-16 text-left">
        <h2 className="pt-2 text-sm font-semibold">{shortTitle}</h2>
        <div className="flex">
          <p className="p-2 text-[#DB4444]">${price}</p>
          <span className="p-2 text-gray-400 line-through">$150</span>
        </div>
        <span>⭐⭐⭐⭐⭐</span>
        <button className="absolute right-0 top-0 rounded bg-[#DB4444] p-1 text-[10px] font-extralight text-white">
          -40%
        </button>
      </div>
    </div>
  );
}

export default AllProductPageP;
