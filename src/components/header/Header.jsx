import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./styles.scss";

const Header = () => {
  let location = useLocation();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      {window.innerWidth > 800 ? (
        <nav>
          <ul className="activatedNavbar">
            <div className="logoMobile">
              <Link to="/" className="logo">
                <img src={Logo} alt="logo" />
              </Link>
              <hr />
            </div>
            <Link
              to="/"
              className={`navItem ${
                location.pathname === "/" ? "currentPage" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/calendario"
              className={`navItem ${
                location.pathname === "/calendario" ? "currentPage" : ""
              }`}
            >
              Calendário
            </Link>
            <li className="dropdown">
              <div className="text navItem">
                <a className="dropdownName">Torneio</a>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="subMenu">
                <Link
                  to="/grupos"
                  className={`navItem ${
                    location.pathname === "/grupos" ? "currentPage" : ""
                  }`}
                >
                  <span>⚆</span> Grupos
                </Link>
                <Link
                  to="/leaderboard"
                  className={`navItem ${
                    location.pathname === "/leaderboard" ? "currentPage" : ""
                  }`}
                >
                  <span>⚆</span> Jogadores
                </Link>
              </div>
            </li>
            <Link
              to="/regulamento"
              className={`navItem ${
                location.pathname === "/regulamento" ? "currentPage" : ""
              }`}
            >
              Regulamento
            </Link>
            <Link
              to="/contactos"
              className={`navItem ${
                location.pathname === "/contactos" ? "currentPage" : ""
              }`}
            >
              Contactos
            </Link>
          </ul>
        </nav>
      ) : (
        <div className="burger">
          <div className="burgerText">MENU</div>
          <div className="drawing">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
