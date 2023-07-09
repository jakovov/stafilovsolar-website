import React, { useState, useEffect } from 'react';
import Logo from '../images/novologo.png';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/">
        <img src={Logo} alt="" id="logolink" width="100px" />
      </Link>
      <button
        className={`navbar-toggler ${isOpen ? 'active' : ''}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              to="/zabiznis"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Продукти
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/fotovoltaici" className="dropdown-item" id="fotovoltaiciprod">
                  Фотоволтаици
                </Link>
              </li>
              <li>
                <Link to="/invertori" className="dropdown-item" id="invertoriprod">
                  Инвертори
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  to="/konstrukciiimaterijali"
                  className="dropdown-item disabled"
                >
                  Конструкции и материјали
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/proekti" className="nav-link" id="projectsid">
              Проекти
            </Link>
          </li>
          <li className="nav-item zanaslink">
            <Link to="/zanas" className="nav-link">
              За нас
            </Link>
          </li>
          <li className="nav-item" id="kontaktbtn">
            <Link to="/kontakt" className="nav-link">
              Контакт
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

