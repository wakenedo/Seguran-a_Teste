import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";

export function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { user } = useAuth(); // get current user

  // Convert id param to number
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="">
      <div className="border p-2">
        <img
          src={product.image}
          className="rounded mx-auto d-block p-2 border"
          alt={product.name}
        />
      </div>
      <div className="p-2 border mx-auto mt-2">
        <div>
          <h1>{product.name}</h1>
        </div>
        <p>{product.description || "No description available."}</p>
        <p>
          <strong>${product.price.toFixed(2)}</strong>
        </p>
        {user ? (
          <button
            className="btn btn-success"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
          >
            Login to Add
          </button>
        )}
      </div>
    </div>
  );
}
