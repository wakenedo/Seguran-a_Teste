export function Home() {
  const products = [
    {
      id: 1,
      name: "T-shirt",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sneakers",
      price: 89.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <div className="width-100 border ">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <a href={`/product/${product.id}`} className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
