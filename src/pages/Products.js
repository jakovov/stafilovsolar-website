import React from 'react';
import products from '../components/Products.json';
import '../styles/Products.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductsPage() {
  return (
    <section className='fotovoltaici'>
    <div className='products-main-container'>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} class="product" >
  <span className="product__price">{product.price}</span>
  <img className="product__image" src={product.image} alt={product.name}/>
  <h1 className="product__title">{product.name}</h1>
  <hr id='product-hr'/>
  <p>{product.description}</p>
  <a href="" className="product__btn btn"><ShoppingCartIcon/>Додај во кошничка</a>
</div>
        ))}
      </div>
    </div>
    </section>
  );
}


export default ProductsPage;

