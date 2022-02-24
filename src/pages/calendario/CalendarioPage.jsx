import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import CalendarioGameCard from "../../components/CalendarioGameCard/CalendarioGameCard";

import calendario from "../../static/calendario.json";

import "./styles.scss";

const filterGames = (filter) => {
  if (filter === "") {
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
  const [dateFilter, setDateFilter] = useState("");

  const [games, setGames] = useState([]);

  const handleChange = (e) => {
    setSearchQueryParams(e.target.value);
  };

  const filterGamesByDate = (filter) => {
    if (filter === "") {
      return calendario;
    }

    if (filter.includes("Fevereiro")) {
      filter = filter.replace("Fevereiro", "02");
    } else if (filter.includes("Março")) {
      filter = filter.replace("Março", "03");
    } else if (filter.includes("Abril")) {
      filter = filter.replace("Abril", "04");
    }

    setDateFilter(filter);

    filter = filter.replaceAll("/", "");

    return calendario?.filter((game) => {
      return game.data === filter;
    });
  };

  useEffect(() => {
    setDateFilter("");
    setGames(filterGames(searchQueryParams));
  }, [searchQueryParams]);

  useEffect(() => {
    setGames(filterGamesByDate(dateFilter));
  }, [dateFilter]);

  useEffect(() => {
    setGames(calendario);
  }, []);

  return (
    <div className="calendarPage">
      <h1>Calendário {dateFilter ? `| ${dateFilter}` : null}</h1>
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
          <Calendar filterGamesByDate={filterGamesByDate} />
        </div>
      </div>
    </div>
  );
};

export default CalendarioPage;
