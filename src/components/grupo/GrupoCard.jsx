import React from "react";
import EquipaTable from "../equipaTable/EquipaTable";

import "./styles.scss";

const GrupoCard = () => {
  return (
    <div className="grupoCard">
      <h2>Grupo A</h2>
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
        <EquipaTable posicao="1" nome="Economia" />
        <EquipaTable
          posicao="2"
          nome="Laranja Mecânica (Ciências do Desporto)"
        />
        <EquipaTable posicao="3" nome="Imperiais (Relações Internacionais)" />
        <EquipaTable posicao="4" nome="Biologia" />
        <EquipaTable posicao="5" nome="TERMO Boys (Medicina Veterinária)" />
      </table>
    </div>
  );
};

export default GrupoCard;
