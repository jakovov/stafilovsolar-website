import React from 'react'
import '../styles/Order.css'

function Order() {
  return (
    <div className='ordersection'>
    <div className="emailform" id='orderinfo'>
              <div className="test2">
              <div className="sec-title">
                        <h2 className='card-title-items'>Испратете ни ги вашите информации</h2>
                    </div>
            <input type="name" placeholder="Вашето име"/>
            <input type="email" placeholder="Вашата емаил адреса"/>
            <input type="number" placeholder="Вашиот телефонски број" inputMode="tel" autoComplete="tel"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Дополнителни информации доколку имате потреба"></textarea>
            <button type='submit'>Прати</button>
          </div>
            </div>
            </div>
  )
}

export default Order