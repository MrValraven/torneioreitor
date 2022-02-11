import React from "react";
import Button from "../button/Button";

import Image from "../../assets/heroImage.png";

import "./styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h1>Torneio do Reitor</h1>
        <p>
          O tradicional Torneio do Reitor está de volta!
          <br /> Não percas tempo e inscreve já a tua equipa, pois as vagas são
          limitadas às primeiras 24 equipas.
        </p>
        <Button buttonText="Inscreve-te já!"></Button>
      </div>
      <div className="heroImage">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
