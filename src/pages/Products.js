import React, { useState } from 'react';
import products from '../components/Products.json';
import '../styles/Products.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderForm from '../components/OrderForm';
import CheckIcon from '@mui/icons-material/Check';

function ProductsPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const addToCart = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    setCartItems([...cartItems, item]);
  };

  const removeCartItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    return totalPrice.toFixed(2);
  };

  const handlePlaceOrder = () => {
    setShowOrderForm(true);
  };

  return (
    <section className="fotovoltaici">
      <div className="products-main-container">
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product">
              {/* Product details */}
              <span className="product__price">{product.price}</span>
              <div className='product__image_main'><img className="product__image" src={product.image} alt={product.name} /></div>
              <h1 className="product__title">{product.name}</h1>
              <hr id="product-hr" />
              <div className='product-information'>
              <h6>Достапност: <CheckIcon/></h6>
              <h6>Тип: Monocrystal</h6>
              </div>
              
              <p>{product.description}</p>
              {/* Add to Cart button */}
              <button className="product__btn" onClick={() => addToCart(product)}>
                <ShoppingCartIcon /> Додај во кошничка
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          <h2>Кошничка</h2>
          {cartItems.length === 0 ? (
            <p>Немате додадено ништо во вашата кошничка.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <span className="cart-item__price">{item.price}</span>
                  </div>
                  <button className="cart-item__remove" onClick={() => removeCartItem(item.id)}>
                    Избриши
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-total">
            <div>
              <span className="cart-total__label">Вкупна сума:</span>
              <span className="cart-total__price"> {calculateTotalPrice()} MKD</span>
            </div>
            <div className="cart-buttons">
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Извршете нарачка
              </button>
              {showOrderForm && (
                <div className="order-form-container">
                  <h3>Внесете ги вашите податоци за нарачка:</h3>
                  <OrderForm cartItems={cartItems} calculateTotalPrice={calculateTotalPrice} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsPage;










