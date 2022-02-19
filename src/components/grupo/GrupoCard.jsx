import React from "react";
import EquipaTable from "../equipaTable/EquipaTable";

import "./styles.scss";

const GrupoCard = ({ groupName, grupo }) => {
  return (
    <div className="grupoCard">
      <h2>{groupName}</h2>
      <table>
        <tr>
          <th>Posição</th>
          <th className="equipa">Equipa</th>
          <th>Jogos</th>
          <th>Vitórias</th>
          <th>Empates</th>
          <th>Derrotas</th>
          <th>Marcados</th>
          <th>Sofridos</th>
          <th>Diferença de golos</th>
          <th>Pontos</th>
        </tr>
        {grupo?.map((equipa, index) => (
          <EquipaTable
            key={equipa.nome}
            posicao={index + 1}
            nome={equipa.nome}
            jogos={equipa.jogos}
            vitorias={equipa.vitorias}
            empates={equipa.empates}
            derrotas={equipa.derrotas}
            marcados={equipa.marcados}
            sofridos={equipa.sofridos}
            diferencaDeGolos={equipa.diferencaDeGolos}
            pontos={equipa.pontos}
          />
        ))}
      </table>
    </div>
  );
};

export default GrupoCard;
