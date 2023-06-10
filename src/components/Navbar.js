import React from 'react';
import Logo from '../images/novologo.png';
import { Link } from "react-router-dom";
// import Icon from '../images/zolto-removebg.png'
import '../styles/Navbar.css'
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
       <Link to="/"><img src={Logo} alt="" id="logolink" width="100px"></img></Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav"> 
          {/* <li className="nav-item">
            <Link to="/zavasiotdom"  className="nav-link">За вашиот дом</Link>
          </li>
          <li className="nav-item">
          <Link to="/zabiznis"  className="nav-link">За Бизнис</Link>
          </li> */}
          <li className="nav-item dropdown">
            <Link to="/zabiznis" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Продукти</Link>
            <ul className="dropdown-menu">
              <li><Link to="/fotovoltaici" className="dropdown-item" id="fotovoltaiciprod">Фотоволтаици</Link></li>
              <li><Link to="/invertori" className="dropdown-item" id="invertoriprod">Инвертори</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link to="/konstrukciiimaterijali" className="dropdown-item disabled">Конструкции и материјали</Link></li>
            </ul>
          </li>
          <li className="nav-item">
              <Link to="/proekti" className="nav-link" id="projectsid">Проекти</Link>
            </li>
            <li className="zanaslink">
            <Link to="/zanas" className="nav-link">За нас</Link>
            </li>
        </ul>
      </div>
      <Link to="/kontakt"><button className="btn kontaktlink  my-2 my-sm-0" type="submit" id="kontaktbtn"> Контакт</button></Link> 
      
      
    </nav>
      );
}
 
export default Navbar;