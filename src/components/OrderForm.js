import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function OrderForm({ cartItems, calculateTotalPrice }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email template parameters
    const templateParams = {
      name,
      address,
      city,
      email,
      mobile,
      products: cartItems.map((item) => `${item.name} (${item.type}, ${item.kW} kW)`).join(', '),
    };

    // Send the email
    emailjs
    .send('service_j275tt5', 'template_2rf6unp', templateParams, '2tVcCXHvWdfqayjza')
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Add any success message or redirect to a confirmation page
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Add any error handling logic or display an error message to the user
      });

    // Reset the form fields
    setName('');
    setAddress('');
    setCity('');
    setEmail('');
    setMobile('');
  };

  return (
    <div>
      <h2>Внесете ги вашите податоци</h2>
      <form onSubmit={handleSubmit} className='orderform'>
        <div>
          <label htmlFor="name">Име и Презиме:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Адреса на живеење:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Град:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Телефонски број:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <button type="submit">Изврши нарачка</button>
      </form>
    </div>
  );
}

export default OrderForm;


