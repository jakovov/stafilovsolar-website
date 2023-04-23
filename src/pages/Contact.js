import React from 'react'
import '../styles/Contact.css'
import ContactLogo from '../images/novologo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  return (
    <div className='aboutpage'>
    
    <div className="test">
          <div className="kontaktsection">
            <div className="emailform">
              <div className="test2">
              <div className="sec-title">
                        <h6 className="sub-title">КОНТАКТИРАЈТЕ НЕ</h6>
                        <h2>Стапи во контакт</h2>
                        <p>Слободно контактирајте не за какви било прашања или повратни информации. Ние сме тука да помогнеме и секогаш сме желни да слушнеме од вас. Ви благодариме што стапивте во контакт!</p>
                    </div>
           
            
            <input type="name" placeholder="Вашето име"/>
            <input type="email" placeholder="Вашата емаил адреса"/>
            <input type="number" placeholder="Вашиот телефонски број" inputMode="tel" autoComplete="tel"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Ваша порака или прашање"></textarea>
            <button type='submit'>Прати</button>
          </div>
            </div>
            <div className="card " id="kontaktkard">
              <img src={ContactLogo} className="card-img-top" alt="..."/>
              <div className="card-body" id='cardbodycontact'>
                <h4 className="card-title">Контакт инфо</h4>
                <div className="card-text">
                <h5>Нашата локација</h5>
                  <p><LocationOnIcon/>Шишка 53, Кавадарци</p>
                <h5>Брз контакт</h5>
              <p><EmailIcon/>info@stafilovsolar.com</p>
              <p><CallIcon/>+389 70 316 027</p>
              <h5>Opening Hours</h5>
              <p>Од Понеделник - Петок<br/>
                    08:00 AM - 16:00 PM</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className='Map'>
    <iframe className='mapstyle' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.436392204948!2d22.016644890971957!3d41.45144951800652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1356659016344bd3%3A0x5804c5ed2e7527b9!2sStafilov%40Petrov%20Solar%20energija!5e0!3m2!1sen!2smk!4v1682190949041!5m2!1sen!2smk" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
    </div>
    </div>
    


  )
}

export default Contact