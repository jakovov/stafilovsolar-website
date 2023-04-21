import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="almostfooter">
        <div className="howmanydivs">
        <div className="first">
          <h3>Корисни Линкови</h3>
          <p><strong>Контакт</strong></p>
          
            <p><strong>Како да ја измерете вашата потрошувачка</strong></p>
          

            <p><strong>Галерија</strong></p>

          <p><strong>Календар</strong></p>
        </div>
        <div className="first">
          <h3>Работно Време</h3>
          <h5>Понеделник-Петок</h5>
          <p>Понеделник 08:00-16:00h</p>
          <p>Вторник 08:00-16:00h</p>
          <p>Среда 08:00-16:00h</p>
          <p>Четврток 08:00-16:00h</p>
          <p>Петок 08:00-16:00h</p>
        </div>
        <div className="second">
          <h3>Социјални Мрежи</h3>
          <a href="https://www.facebook.com/12stafilovpetrov" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
          <a href="https://www.facebook.com/12stafilovpetrov" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
          {/* <a href='https://www.facebook.com/12stafilovpetrov'><FacebookIcon/></a>
          <a href='https://www.facebook.com/12stafilovpetrov'><InstagramIcon/></a> */}
        </div>
        <div className="logofoot">
          <img className="imglogo" src="images/novologo.png" alt="" height="150px" />
        </div>
      </div>
    </div>
  )
}

export default Footer