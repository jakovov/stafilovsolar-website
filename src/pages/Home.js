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
import { Link } from "react-router-dom";
import ImageWithInfo from '../components/ImageWithInfo';
// import project1 from '../images/project1.jpg';
// import project2 from '../images/project2.jpg';
// import project3 from '../images/project3.jpg';
// import project5 from '../images/project5.jpg';
import aboutusImg from '../images/about-us-homepage.jpg'
// import LightbulbIcon from '@mui/icons-material/Lightbulb';

import '../styles/Home.css';


import project1 from '../images/projects/project1.jpg'
import project2 from '../images/projects/project2.jpg'
import project3 from '../images/projects/project3.jpg'
import project4 from '../images/projects/project4.jpg'
import project5 from '../images/projects/project5.jpg'
import project6 from '../images/projects/project6.jpg'



function Home() {
  const images = [HomeImage1, HomeImage2, HomeImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }
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
          <Link  to="/zanas"><button className="btn" type="submit" id="vidipovekjebtn" onClick={handleScrollToTop}>
            <img src={Icon} alt="" width="35px"></img>Види повеќе
          </button></Link>
        </div>
      </div>
      <div className="cards">
        <div className="cards1">
          <div className="card-holder cholder1">
            <div className='caption'>
              <a className="homeicons" href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><ElectricBoltIcon /></a>
              <h3>Ефикасност и моќност</h3>
            </div>
            <div className="description">

              <p>Нашата фирма нуди соларни панели и фотоволтаични системи со добра ефикасност и моќност, што гарантира максимална производство на енергија.</p>
            </div>
          </div>
          <div className="card-holder cholder2">
            <div className='caption'>
              <a className="homeicons" href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><SupportIcon /></a>
              <h3>Доверба и гаранција
              </h3>
            </div>
            <div className="description">

              <p>Сите наши производи доаѓаат со 12-годишна гаранција на опремата и 25-годишна гаранција за линеарни перформанси.</p>
            </div>
          </div>
          <div className="card-holder cholder3">
            <div className='caption'>
              <a className="homeicons" href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><BuildIcon /></a>
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
              <img src={test} alt="Benefit1" />
            </div>
            <div className="benefit-img">
              <img src={test2} alt="Benefit2" />
            </div>
          </div>
        </div>
      </section>
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


      <div className='pero'>
        <div className="background-image">
          <div className="overlay-text">
            <h2>Ви требаат повеќе информации?</h2>
            <p>Повикајте ги нашите експерти за бесплатна консултација.</p>
            <div className='infosection-number'><h4>(+389) 71 278 859</h4></div>
          </div>
        </div>

      </div>
      <Stats />
     
      <div className='aboutus-home'>
        <div className='aboutus-home-text'>
          <div className='aboutus-home-title'>За нас</div>
          <div className='aboutus-home-description'><p>Стафилов Солар е приватна компанија основана во 2020 година, која нуди соларна опрема и услуги за инсталација за домаќинствата и бизнисите во Северна Македонија. Обезбедуваме целосен опсег на фотоволтаични системи, вклучувајќи поврзани со мрежа, самостојни и хибридни системи, користејќи опрема со врвен квалитет од светски брендови. Нудиме целосна поддршка од нашиот тим за инсталација и долгорочно работење на системот.</p>
          </div>
          
          <div className='aboutus-home-bottomdesc'>
            {/* <div className='aboutus-home-icon'>
              <LightbulbIcon/>
            </div> */}
            <div className='aboutus-home-bottomdesc-text'>
              <h6>Нашата цел</h6>
              <p>Стафилов Солар има за цел да ги задоволи потребите за зелена енергија на своите клиенти додека ја штити животната средина.</p>
            </div>
          </div>
          <Link to="/zanas"><button className='Load-more-project-home' id='abouthomebtn' onClick={handleScrollToTop}>Дознај повеќе</button></Link>
        </div>
        <div className='aboutus-home-img'>
            <img src={aboutusImg} alt='About us in home'></img>
        </div>
      </div>




      <div className='Projects-home'>
      <div className='Projects-title-home'><h2>Нашите последни проекти</h2></div>
      {/* <div className='Projects-home-inside'>
        <ImageWithInfo
          src={project1}
          alt="Home solar panel"
          info={{ __html: '<h5>Демир Капија</h5><p>20KW</p>' }}
        />

        <ImageWithInfo
          src={project2}
          alt="Home solar panel"
          info={{ __html: '<h5>Памела Неготино</h5><p>40KW</p>' }}
        />
        <ImageWithInfo
          src={project3}
          alt="Home solar panel"
          info={{ __html: '<h5>Гевгелија</h5><p>60KW</p>' }}
        />
        <ImageWithInfo
          src={project5}
          alt="Home solar panel"
          info={{ __html: '<h5>Маркет Дијана</h5><p>10KW</p>' }}
        />
        
        



      </div> */}


      <div className='home-projects-container'>
      <div class="container23">
  <div class="left">
 
  <ImageWithInfo
          className="top-img"
          src={project1}
          alt="Home solar panel"
          info={{ __html: '<h5>Демир Капија</h5><p>20KW</p>' }}
        />
 
    <div class="bottom-images">
    <ImageWithInfo
    className="small-img"
          src={project2}
          alt="Home solar panel"
          info={{ __html: '<h5>Памела Неготино</h5><p>40KW</p>' }}
        />
      <ImageWithInfo
      className="small-img"
          src={project3}
          alt="Home solar panel"
          info={{ __html: '<h5>Гевгелија</h5><p>60KW</p>' }}
        />
    </div>
  </div>
  <div class="right">
    <div class="top-images">
    <ImageWithInfo
          className="small-img"
          src={project4}
          alt="Home solar panel"
          info={{ __html: '<h5>Владенци, Василево<p>40KW</p>' }}
        />
      <ImageWithInfo
          className="small-img"
          src={project5}
          alt="Home solar panel"
          info={{ __html: '<h5>Демир Капија</h5><p>20KW</p>' }}
        />
    </div>
    <ImageWithInfo
          
          src={project6}
          alt="Home solar panel"
          
          info={{ __html: '<h5>Демир Капија</h5><p>20KW</p>'
           }}
           className="bottom-img"
        />
  </div>
</div>
</div>
      <Link to="/proekti"><button className='Load-more-project-home'>Види повеќе</button></Link>
      </div>




     

      <div className='kava'>
        <div className='zafir'>
          <div><h2>Не двоумете се да не контактирате во секое време.</h2></div>
          <Link to="/kontakt"><button className="btn kontaktlink  my-2 my-sm-0" type="submit" id="kontaktbtn2"  onClick={handleScrollToTop}> Контакт</button></Link>
        </div>
      </div>

    </div>
  );
}

export default Home;




