import React from "react";

import "./styles.scss";

const EquipaTable = ({
  posicao,
  nome,
  jogos,
  vitorias,
  empates,
  derrotas,
  marcados,
  sofridos,
  diferencaDeGolos,
  pontos,
}) => {
  return (
    <tr className="equipaTable">
      <td>{posicao}</td>
      <td>{nome}</td>
      <td>{jogos}</td>
      <td>{vitorias}</td>
      <td>{empates}</td>
      <td>{derrotas}</td>
      <td>{marcados}</td>
      <td>{sofridos}</td>
      <td>{diferencaDeGolos}</td>
      <td>{pontos}</td>
    </tr>
  );
};

export default EquipaTable;
