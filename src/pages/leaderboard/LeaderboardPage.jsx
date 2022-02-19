import React, { useEffect, useState } from "react";

import equipas from "../../static/equipas.json";

import "./styles.scss";

const LeaderboardPage = () => {
  const jogadoresDasEquipas = [];
  const [jogadores, setJogadores] = useState([]);

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

  useEffect(() => {
    addJogadores();
    setJogadores(jogadoresDasEquipas);
  }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard de jogadores</h1>
      <div className="table-container">
        <table>
          <tr>
            <th>Jogador</th>
            <th>Golos</th>
            <th>Cartões Amarelos</th>
            <th>Cartões Vermelhos</th>
          </tr>
          {jogadores.sort(compareNames).map((jogador) => (
            <tr key={jogador.nome}>
              <td>{jogador.nome}</td>
              <td>{jogador.golos}</td>
              <td>{jogador.amarelos}</td>
              <td>{jogador.vermelhos}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
