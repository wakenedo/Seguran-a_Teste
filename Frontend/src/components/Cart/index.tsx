export function Cart() {
  const cartItems = [
    { id: 1, name: "T-shirt", price: 19.99, quantity: 2 },
    { id: 2, name: "Jeans", price: 49.99, quantity: 1 },
  ];
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
            key={item.id}
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
