import React from "react";
import Hero from "../../components/hero/Hero";
import JogoCard from "../../components/jogoCard/JogoCard";

import "./styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero></Hero>
      <div className="nextGames">
        <h2>Próximas jornadas</h2>
        <div className="jogos">
          <JogoCard
            data="11 Fevereiro, 2022"
            equipa1="DIRTY NUGGETS"
            equipa2="NO SOLO ALCOOL"
          />
          <JogoCard
            data="03 Março, 2022"
            equipa1="LARANJA MECÂNICA"
            equipa2="GESTÃO FC"
          />
          <JogoCard
            data="25 Abril, 2022"
            equipa1="CUIDADO QU'É DESPORTO"
            equipa2="DISCÍPULOS DE ROGER"
          />
          <JogoCard
            data="01 Junho, 2022"
            equipa1="ILHAS SAD"
            equipa2="SHOTS DE BAGAÇO"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
