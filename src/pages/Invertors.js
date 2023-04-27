import React, { useState } from 'react';
import products from '../components/Invertors.json';
import '../styles/Invertors.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

  return (
    <section className='invertors'>
    <div className='products-main-container2'>
      <div className="products-container">
        {products.map((product) => (
          product.options.map((option) => (
            (option.kW === selectedKW[product.name]) && // only show the selected kW for this product
            <div key={`${product.name}-${option.kW}`} className="product">
              <span className="product__price">{option.price}</span>
              <img className="product__image" src={option.image} alt={product.name}/>
              <h1 className="product__title">{product.name} {option.kW} kW</h1>
              <hr id='product-hr'/>
              <p>{product.description}</p>
              <label htmlFor={`${product.name}-kWSelect`}>Select kW:</label>
              <select id={`${product.name}-kWSelect`} value={selectedKW[product.name]} onChange={(e) => handleKWChange(product.name, e.target.value)}>
                {product.options.map((option) => (
                  <option key={option.kW} value={option.kW}>{option.kW} kW</option>
                ))}
              </select>
              <a href="" className="product__btn btn"><ShoppingCartIcon/>Додај во кошничка</a>
            </div>
          ))
        ))}
      </div>
    </div>
    </section>
  );
}

export default Invertors;



