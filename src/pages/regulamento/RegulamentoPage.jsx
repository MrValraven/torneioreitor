import React from "react";

import Image from "../../assets/regulamento.png";
import Regulamento from "../../assets/regulamento.pdf";

import "./styles.scss";

const RegulamentoPage = () => {
  return (
    <div className="regulamento">
      <div className="other-info">
        <h1>Regulamento</h1>
        <p>
          Faz aqui o{" "}
          <a href={Regulamento} download>
            <span>download</span>
          </a>{" "}
          da folha com o regulamento do torneio!
        </p>
      </div>
      <img src={Image} alt="" />
    </div>
  );
};

export default RegulamentoPage;
