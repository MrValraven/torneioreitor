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
    const day = date[0] + date[1];
    const month = date[2] + date[3];

    return `${day} ${getMonth(month)}, 2022`;
  };
  return (
    <div className="calendarioGameCard">
      <p>
        {jogo.hora} | {formatDate(jogo.data)}
      </p>
      <p>{jogo.equipa1}</p>
      <p>{jogo.resultado}</p>
      <p>{jogo.equipa2}</p>
      <p>Pavilhao da universidade de evora </p> {/* Link aqui */}
    </div>
  );
};

export default CalendarioGameCard;
