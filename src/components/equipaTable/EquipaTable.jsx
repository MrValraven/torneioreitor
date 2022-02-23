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
      {window.innerWidth >= 600 ? (
        <>
          {" "}
          <td>{jogos}</td>
        </>
      ) : null}

      <td>{vitorias}</td>
      <td>{empates}</td>
      <td>{derrotas}</td>
      {window.innerWidth >= 600 ? (
        <>
          {" "}
          <td>{marcados}</td>
          <td>{sofridos}</td>
          <td>{diferencaDeGolos}</td>
        </>
      ) : null}

      <td>{pontos}</td>
    </tr>
  );
};

export default EquipaTable;
