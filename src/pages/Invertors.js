import React, { useState } from 'react';
import products from '../components/Invertors.json';
import '../styles/Invertors.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import OrderForm from '../components/OrderForm';

function Invertors() {
  const [selectedKW, setSelectedKW] = useState({});

  // set the default kW for each product
  if (Object.keys(selectedKW).length === 0) {
    const defaultKW = {};
    products.forEach((product) => {
      defaultKW[product.name] = product.options[0].kW;
    });
    setSelectedKW(defaultKW);
  }

  const handleKWChange = (productName, kW) => {
    setSelectedKW((prevState) => ({
      ...prevState,
      [productName]: kW,
    }));
  };

  const [cartItems, setCartItems] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showExecuteOrder] = useState(false);

  const addToCart = (product, option) => {
    if (!option || typeof option !== 'object' || !option.price) {
      console.error("Invalid option selected");
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: option.price,
      image: option.image,
      kW: option.kW,
      type: option.type,
    };

    setCartItems((prevCartItems) => [...prevCartItems, item]);
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

  // const handleExecuteOrder = () => {
  //   setShowOrderForm(false);
  //   setShowExecuteOrder(true);
  // };

  return (
    <section className='invertors'>
      <div className='products-main-container2'>
        <div className="products-container">
          {products.map((product) => (
            product.options.map((option) => (
              (option.kW === selectedKW[product.name]) && // only show the selected kW for this product
              <div key={`${product.name}-${option.kW}`} className="product">
                <span className="product__price">{option.price}</span>
                <div className='product__image_main'> <img className="product__image" src={option.image} alt={product.name}/></div>
               
                <h1 className="product__title">{product.name} {option.kW} kW</h1>
                <hr id='product-hr' />
                <div className='product-information'>
                  <h6>Достапност: <CheckIcon /></h6>
                  <h6>Тип: {option.type}</h6>
                </div>
                <p>{product.description}</p>
                <label htmlFor={`${product.name}-kWSelect`}>Select kW:</label>
                <select id={`${product.name}-kWSelect`} value={selectedKW[product.name]} onChange={(e) => handleKWChange(product.name, e.target.value)}>
                  {product.options.map((option) => (
                    <option key={option.kW} value={option.kW}>{option.kW} kW</option>
                  ))}
                </select>
                <h3 className="product__btn" onClick={() => addToCart(product, option)}>
                  <ShoppingCartIcon />Додај во кошничка
                </h3>
              </div>
            ))
          ))}
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          <h2>Кошничка <ShoppingCartIcon/></h2>
          <h5>Инфо за достава: Моментално вршиме достава преку карго.</h5>
          <hr></hr>
          {cartItems.length === 0 ? (
            <p>Немате додадено ништо во вашата кошничка.</p>
            
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name} {item.kW}kW</h3>
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
        {showOrderForm && !showExecuteOrder && (
          <div className="order-form-container">
            <OrderForm cartItems={cartItems} calculateTotalPrice={calculateTotalPrice} />
          </div>
        )}
        {cartItems.length > 0 && !showOrderForm && !showExecuteOrder && (
          <div className="cart-total">
            <div>
              <span className="cart-total__label">Вкупна сума:</span>
              <span className="cart-total__price"> {calculateTotalPrice()} MKD</span>
            </div>
            <div className="cart-buttons">
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Продолжи нарачка
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Invertors;







