import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import JogoCard from "../../components/jogoCard/JogoCard";

import "./styles.scss";
import calendario from "../../static/calendario.json";

const currentDate = new Date();

const getCurrentMonth = (monthNumber) => {
  switch (monthNumber) {
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    default:
      break;
  }
};

const Homepage = () => {
  const [nextGames, setNextGames] = useState([]);

  useEffect(() => {
    console.log(parseInt(calendario[5].data.split("").reverse().join("")));
    setNextGames(
      calendario
        .filter(
          (jogo) => parseInt(jogo.data.split("").reverse().join("")) >= 22023060
        )
        .splice(0, 4)
    );
  }, []);
  return (
    <div className="homepage">
      <Hero></Hero>
      <div className="nextGames">
        <h2>Próximas jornadas</h2>
        <div className="jogos">
          {nextGames.map((nextGame) => (
            <JogoCard
              key={nextGame.id}
              data={`${nextGame.data.slice(0, 2)} ${getCurrentMonth(
                nextGame.data.slice(3, 4)[0] - 1
              )}, 2022 | ${nextGame.hora}`}
              equipa1={nextGame.equipa1}
              equipa2={nextGame.equipa2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
