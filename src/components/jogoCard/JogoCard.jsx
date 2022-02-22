import React from "react";

import "./styles.scss";


const JogoCard = ({ data, equipa1, equipa2 }) => {
  return (
    <div className="jogoCard">
      <h3>{data}</h3>
      <div className="equipas">
        <p> {equipa1} </p>
        <p className="vs">VS</p>
        <p> {equipa2} </p>
      </div>
    </div>
  );
};

export default JogoCard;
