import React from "react";

import "./styles.scss";

const CalendarioGameCard = ({ jogo }) => {
  const getMonth = (monthNumber) => {
    if (monthNumber === "02") {
      return "Fevereiro";
    } else if (monthNumber === "03") {
      return "Março";
    } else if (monthNumber === "04") {
      return "Abril";
    }

    return "erro";
  };

  const formatDate = (date) => {
    const day = date[6] + date[7];
    const month = date[4] + date[5];

    return `${day} ${getMonth(month)}, 2022`;
  };
  return (
    <div className="calendarioGameCard">
      <p className="data">
        {jogo.hora} | {formatDate(jogo.data)}{" "}
        {jogo.pormenor ? `| ${jogo?.pormenor}` : null}
      </p>
      <div className="equipas">
        <p>{jogo.equipa1}</p>
        <p>{jogo.resultado}</p>
        <p>{jogo.equipa2}</p>
      </div>

      <a
        href="https://goo.gl/maps/daXSCGtP3rDmhPyZA"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-map-marker-alt icon" aria-hidden="true"></i>
        <span>Pavilhão da Universidade de Évora</span>
      </a>
    </div>
  );
};

export default CalendarioGameCard;
