import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <h2>Redes sociais</h2>
        <a
          href="https://www.instagram.com/aauevora/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.facebook.com/AAUEvora/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
      <div className="localizacao">
        <h2>Localização</h2>
        <ul>
          <li>
            <a href="https://goo.gl/maps/hMu13iR5NiM2">
              <i className="fas fa-map-marker-alt icon" aria-hidden="true">
                <span>Morada</span>
              </i>
              <p>Rua Diogo Cão nº 21, 7000-872 Évora</p>
            </a>
          </li>
          <li>
            <a href="tel:+351266098003">
              <i className="fas fa-phone icon" aria-hidden="true">
                <span>Telefone</span>
              </i>
              <p>+ 351 266 09 80 03</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="contactos">
        <h2>Emails</h2>
        <ul>
          <li>
            <a href="mailto:geral@aaue.pt">
              <p>geral@aaue.pt</p>
            </a>
          </li>
          <li>
            <a href="mailto:desportiva@aaue.pt">
              <p>desportiva@aaue.pt</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
