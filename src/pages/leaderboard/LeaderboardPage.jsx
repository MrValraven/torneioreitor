import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import equipas from "../../static/equipas.json";

import "./styles.scss";

const LeaderboardPage = () => {
  const jogadoresDasEquipas = [];
  const [jogadores, setJogadores] = useState([]);
  const { width: windowWidth } = useWindowDimensions();

  const addJogadores = () => {
    for (let index = 0; index < equipas.epoca2022.length; index++) {
      const equipa = equipas.epoca2022[index].jogadores;
      for (let index2 = 0; index2 < equipa.length; index2++) {
        const jogador = equipa[index2];
        jogadoresDasEquipas.push(jogador);
      }
    }
  };

  const compareNames = (a, b) => {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  };

  const compareGoals = (a, b) => {
    if (a.golos > b.golos) {
      return -1;
    }
    if (a.golos < b.golos) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    addJogadores();
    setJogadores(jogadoresDasEquipas);
  }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard de jogadores</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{windowWidth >= 450 ? "Jogador" : "J"}</th>
              <th>{windowWidth >= 450 ? "Golos" : "G"}</th>
              <th>{windowWidth >= 450 ? "Cartões Amarelos" : "C/A"}</th>
              <th>{windowWidth >= 450 ? "Cartões Vermelhos" : "C/V"}</th>
            </tr>
          </thead>
          <tbody>
            {jogadores
              .sort((a, b) => compareGoals(a, b))
              .map((jogador, index) => (
                <tr key={jogador.nome + index.toString()}>
                  <td>{jogador.nome}</td>
                  <td>{jogador.golos}</td>
                  <td>{jogador.amarelos}</td>
                  <td>{jogador.vermelhos}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
