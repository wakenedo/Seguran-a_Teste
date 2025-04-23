import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";

export function Cart() {
  const { cart } = useCart();
  const { products } = useProducts();

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...item,
      name: product?.name || "Unknown",
      price: product?.price || 0,
    };
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li
            key={item.productId}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name} x{item.quantity}
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h4>Total: ${total.toFixed(2)}</h4>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
}
