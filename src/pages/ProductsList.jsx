import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="page-container">
        <p>Loading products...</p>
      </div>
    );
  if (error)
    return (
      <div className="page-container">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="page-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-card"
          >
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="description">
              {product.description.substring(0, 100)}...
            </p>
            <p className="rating">Rating: {product.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
