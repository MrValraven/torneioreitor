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
          <br /> Acompanha a tua equipa de futsal, aqui podes consultar o
          calendário dos jogos e os resultados.”
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
