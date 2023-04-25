import React from 'react';
import products from '../components/Products.json';
import '../styles/Products.css';
function ProductsPage() {
  return (
    <div>
    <div>curently working on it</div>
    <div className="products-container">
    
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h2 className="product-name">{product.name}</h2>
          {/* <p className="product-description">{product.description}</p> */}
          <p className="product-price">{product.price}</p>
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductsPage;
