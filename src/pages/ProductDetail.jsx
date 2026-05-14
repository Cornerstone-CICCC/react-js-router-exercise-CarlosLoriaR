import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Products.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="page-container"><p>Loading product...</p></div>
  if (error) return <div className="page-container"><p>Error: {error}</p></div>
  if (!product) return <div className="page-container"><p>Product not found</p></div>

  return (
    <div className="page-container">
      <Link to="/products" className="back-link">← Back to Products</Link>
      <div className="product-detail">
        <img src={product.images?.[0] || product.thumbnail} alt={product.title} />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="brand">Brand: {product.brand}</p>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="rating">Rating: {product.rating} ⭐</p>
          <p className="stock">Stock: {product.stock} units</p>
          <p className="category">Category: {product.category}</p>
          {product.discount && <p className="discount">Discount: {product.discountPercentage}%</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
