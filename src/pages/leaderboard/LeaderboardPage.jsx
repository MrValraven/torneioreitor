import React from "react";

import "./styles.scss";

const LeaderboardPage = () => {
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
          <tr>
            <td>José</td>
            <td>5</td>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>António</td>
            <td>20</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Filipe</td>
            <td>9</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
