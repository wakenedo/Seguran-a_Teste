import { useParams } from "react-router-dom";
export function Product() {
  const { id } = useParams();
  const product = {
    id,
    name: "Product " + id,
    description: "Description of product " + id,
    price: 99.99,
  };
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>${product.price.toFixed(2)}</strong>
      </p>
      <button className="btn btn-success">Add to Cart</button>
    </div>
  );
}
