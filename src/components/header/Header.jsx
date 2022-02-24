import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.scss";

const Header = ({ appRef }) => {
  const { width: windowWidth } = useWindowDimensions();
  let location = useLocation();
  const burgerIconRef = useRef(null);
  const burgerTextRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleNavbarMenu = () => {
    if (windowWidth < 1000) {
      burgerIconRef.current.classList.toggle("activatedNavbarBurger");
      burgerTextRef.current.classList.toggle("toggleBurgerText");
      navbarRef.current.classList.toggle("toggleNavbar");
      appRef.current.classList.toggle("removeScrolling");
    }
  };

  return (
    <header>
      <Link onClick={toggleNavbarMenu} to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <nav ref={navbarRef}>
        <ul className="activatedNavbar">
          <div className="logoMobile">
            <Link onClick={toggleNavbarMenu} to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <hr />
          </div>
          <Link
            onClick={toggleNavbarMenu}
            to="/"
            className={`navItem ${
              location.pathname === "/" ? "currentPage" : ""
            }`}
          >
            Home
          </Link>
          <Link
            onClick={toggleNavbarMenu}
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
                onClick={toggleNavbarMenu}
                to="/grupos"
                className={`navItem ${
                  location.pathname === "/grupos" ? "currentPage" : ""
                }`}
              >
                <span>⚆</span> Grupos
              </Link>
              <Link
                onClick={toggleNavbarMenu}
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
            onClick={toggleNavbarMenu}
            to="/regulamento"
            className={`navItem ${
              location.pathname === "/regulamento" ? "currentPage" : ""
            }`}
          >
            Regulamento
          </Link>
          <Link
            onClick={toggleNavbarMenu}
            to="/contactos"
            className={`navItem ${
              location.pathname === "/contactos" ? "currentPage" : ""
            }`}
          >
            Contactos
          </Link>
        </ul>
      </nav>

      <div className="burger" onClick={toggleNavbarMenu}>
        <div className="burgerText" ref={burgerTextRef}>
          MENU
        </div>
        <div className="drawing" ref={burgerIconRef}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
