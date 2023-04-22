import React, { useState, useEffect } from 'react';
import HomeImage1 from '../images/homeimage1.jpg';
import HomeImage2 from '../images/homeimage2.jpg';
import HomeImage3 from '../images/homeimage3.jpg';
import Icon from '../images/zolto-removebg.png'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SupportIcon from '@mui/icons-material/Support';
import BuildIcon from '@mui/icons-material/Build';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Stats from '../components/Stats'
import homesolar from '../images/homesolar.jpg'
import firmsolar from '../images/firmsolar2.jpg'
import product from '../images/product.jpg'
import test from '../images/test1.jpg'
import test2 from '../images/test2.jpg'


import '../styles/Home.css';

function Home() {
  const images = [HomeImage1, HomeImage2, HomeImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);
  
  
  return (
    <div className="homepage">
      <div className="firstsection">
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`image ${index === currentImage ? 'current' : ''}`}
              src={image}
              alt="Home"
            />
          ))}
        </div>
        <div className="bottom-left">
          <h3>Добредојдовте!</h3>
          <h1 id='fronttitle'>Стафилов Солар</h1>
          <h5>
            Друштво за увоз-извоз, производство, трговија и услуги <br />
            Компанија за продажба и монтажа на соларни системи за производство на електрична енергија.
          </h5>
          <button className="btn" type="submit" id="vidipovekjebtn">
          <img src={Icon} alt="" width="35px"></img>Види повеќе
          </button>
        </div>
      </div>
      <div className="cards">
            <div className="cards1">
                <div className="card-holder cholder1">
                <div className='caption'>
                <a className="homeicons" href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><ElectricBoltIcon/></a>
                <h3>Ефикасност и моќност</h3>
                </div>
                    <div className="description">
                    
                    <p>Нашата фирма нуди соларни панели и фотоволтаични системи со добра ефикасност и моќност, што гарантира максимална производство на енергија.</p>
                </div>
                </div>
                <div className="card-holder cholder2">
                <div className='caption'>
                <a className="homeicons" href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><SupportIcon/></a>
                <h3>Доверба и гаранција
                      </h3>
                </div>
                    <div className="description">
                    
                    <p>Сите наши производи доаѓаат со 12-годишна гаранција на опремата и 25-годишна гаранција за линеарни перформанси.</p>
                </div>
                </div>
                <div className="card-holder cholder3">
                <div className='caption'>
                <a className="homeicons" href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><BuildIcon/></a>
                <h3>Висококвалитетна работа</h3>
                </div>

                    <div className="description">
                    
                    <p>Квалитетната работа е клучна за максимизирање на енергетската ефикасност на соларните панели и фотоволтаичните системи. Затоа, инсталирајте ја вашата система со професионални инсталатери.
                    </p>
                </div>
                </div>
            </div>
          </div>



          <section className="our-benefits">
  <div className="benefits-container">
    <div className="benefits-text">
      <h2 className="section-title">ВАШИТЕ ПРИДОБИВКИ</h2>
      <p>Зошто да изберете Стафилов-Солар</p>
      <p>Изборот на соларни панели нуди одржлив и рентабилен начин за напојување на вашиот дом или бизнис, истовремено намалувајќи го јаглеродот. Нашите системи за соларни панели се дизајнирани да ви овозможат долгорочни заштеди на вашите сметки за енергија, да ја зголемат вредноста на вашиот имот и да придонесат за почиста и поздрава животна средина. Изберете Стафилов-Солар за посветла иднина.</p>
    </div>
    <div className="benefits-images">
      <div className="benefit-img">
        <img src={test} alt="Benefit1"/>
      </div>
      <div className="benefit-img">
        <img src={test2} alt="Benefit2"/>
      </div>
    </div>
  </div>
</section>




         <Stats/>
      <div className='pero'>
         <div className="background-image">
      <div className="overlay-text">
        <h2>Ви требаат повеќе информации?</h2>
        <p>Повикајте ги нашите експерти за бесплатна консултација.</p>
        <button>(+389) 71 278 859</button>
      </div>
    </div>
      
    </div>
    
    <section className="what-we-offer">
  <h2 className="section-title">Она што го нудиме</h2>
  <div className="offer-list">
    <div className="offer-item">
      <div className="offer-img">
        <img src={homesolar} alt="Solar Panels for Your Home" />
      </div>
      <div className="offer-details">
        <h3 className="offer-title">Соларни панели за вашиот дом</h3>
        <p className="offer-description">Соларните панели за вашиот дом се една од главните услуги што им ги нудиме на нашите клиенти. Обезбедуваме висококвалитетни соларни панели кои можат да ви помогнат да ги намалите сметките за електрична енергија и да придонесете за почиста животна средина.</p>
      </div>
    </div>
    <div className="offer-item">
      <div className="offer-img">
        <img src={firmsolar} alt="Solar Panels for Your Business" />
      </div>
      <div className="offer-details">
        <h3 className="offer-title">Соларни панели за вашиот бизнис</h3>
        <p className="offer-description">Нашите соларни панели не се погодни само за вашиот дом туку и за вашиот бизнис. Со инвестирање во соларна енергија, можете значително да ги намалите вашите оперативни трошоци и да придонесете за одржлива иднина.</p>
      </div>
    </div>
    <div className="offer-item">
      <div className="offer-img">
        <img src={product} alt="Products about Panels" />
      </div>
      <div className="offer-details">
        <h3 className="offer-title">Производи за панели</h3>
        <p className="offer-description">Нудиме широк асортиман на производи поврзани со соларни панели. Од соларни батерии и инвертери до системи за монтирање и алатки за следење, имаме се што ви треба за да го извлечете максимумот од вашиот систем за соларни панели.</p>
      </div>
    </div>
  </div>
</section>




    
    </div>
  );
}

export default Home;




