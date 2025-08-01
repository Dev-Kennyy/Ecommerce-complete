import { useSelector } from "react-redux";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="flex flex-col gap-6 pt-16">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-2">
            <img
              src={item.image || item.images?.[0]}
              alt={item.name}
              width="32"
            />
            <p className="text-xs">{item.name}</p>
          </div>
          <p className="text-sm font-medium">
            ${item.price} x {item.quantity}
          </p>
        </div>
      ))}

      <hr className="my-2 border-t" />

      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">Subtotal</p>
        <p className="text-sm font-bold">${Math.ceil(subtotal)}</p>
      </div>
    </div>
  );
}

export default CartItem;
