import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export function Home() {
  const { products } = useProducts();

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
