import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import CalendarioGameCard from "../../components/CalendarioGameCard/CalendarioGameCard";

import calendario from "../../static/calendario.json";

import "./styles.scss";

const CalendarioPage = () => {
  return (
    <div className="calendarPage">
      <h1>Calendario</h1>
      <input type="text" placeholder="Pesquisa por Equipa ou data" />
      <div className="main">
        <div className="calendarioGamesOverview">
          {calendario?.map((jogo) => (
            <CalendarioGameCard key={jogo.id} jogo={jogo} />
          ))}
        </div>
        <div className="calendarioContainer">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default CalendarioPage;
