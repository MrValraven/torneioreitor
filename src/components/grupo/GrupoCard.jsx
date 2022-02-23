import React from "react";
import EquipaTable from "../equipaTable/EquipaTable";

import "./styles.scss";

const GrupoCard = ({ groupName, grupo }) => {
  return (
    <div className="grupoCard">
      <h2>{groupName}</h2>
      <table>
        <tr>
          <th>{window.innerWidth >= 1050 ? "Posição" : "Pos"}</th>
          <th className="equipa">
            {window.innerWidth >= 1050 ? "Equipa" : "E"}
          </th>
          {window.innerWidth >= 600 ? (
            <th>{window.innerWidth >= 1050 ? "Jogos" : "J"}</th>
          ) : null}

          <th>{window.innerWidth >= 1050 ? "Vitórias" : "V"}</th>
          <th>{window.innerWidth >= 1050 ? "Empates" : "E"}</th>
          <th>{window.innerWidth >= 1050 ? "Derrotas" : "D"}</th>
          {window.innerWidth >= 600 ? (
            <>
              <th>{window.innerWidth >= 1050 ? "Marcados" : "G/M"}</th>
              <th>{window.innerWidth >= 1050 ? "Sofridos" : "G/S"}</th>
              <th>
                {window.innerWidth >= 1050 ? "Diferença de golos" : "D/G"}
              </th>
            </>
          ) : null}
          <th>{window.innerWidth >= 1050 ? "Pontos" : "P"}</th>
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
