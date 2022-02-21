import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <Link to="/" className="navItem">
            Home
          </Link>
          <Link to="/calendario" className="navItem">
            Calendário
          </Link>
          <li className="dropdown">
            <div className="text navItem">
              <a className="dropdownName">Torneio</a>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="subMenu">
              <Link to="/grupos" className="navItem">
                Grupos
              </Link>
              <Link to="/leaderboard" className="navItem">
                Jogadores
              </Link>
            </div>
          </li>
          <Link to="/regulamento" className="navItem">
            Regulamento
          </Link>
          <Link to="/contactos" className="navItem">
            Contactos
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
