import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import CalendarioGameCard from "../../components/CalendarioGameCard/CalendarioGameCard";

import calendario from "../../static/calendario.json";

import "./styles.scss";

const filterGames = (filter) => {
  /* if (date) {
    return calendario?.filter((game) => {
      return game.data.includes(date);
    });
  } */ if (filter === "") {
    return calendario;
  }

  console.log(filter + "1");

  return calendario?.filter((game) => {
    return (
      game.equipa1.toLowerCase().includes(filter?.toLowerCase()) ||
      game.equipa2.toLowerCase().includes(filter?.toLowerCase())
    );
  });
};

const CalendarioPage = () => {
  const [searchQueryParams, setSearchQueryParams] = useState("");

  const [games, setGames] = useState([]);

  const handleChange = (e) => {
    setSearchQueryParams(e.target.value);
  };

  useEffect(() => {
    setGames(filterGames(searchQueryParams));
  }, [searchQueryParams]);

  useEffect(() => {
    setGames(calendario);
  }, []);

  return (
    <div className="calendarPage">
      <h1>Calendario</h1>
      <input
        type="text"
        placeholder="Pesquisa por Equipa ex.: Valentino FC"
        onChange={handleChange}
      />
      <div className="main">
        <div className="calendarioGamesOverview">
          {games?.map((jogo) => (
            <CalendarioGameCard key={jogo.id} jogo={jogo} />
          ))}
        </div>
        <div className="calendarioContainer">
          <Calendar filterGames={filterGames()} />
        </div>
      </div>
    </div>
  );
};

export default CalendarioPage;
