import React from "react";

import "./styles.scss";

const EquipaTable = ({ posicao, nome }) => {
  return (
    <tr className="equipaTable">
      <td>{posicao}</td>
      <td>{nome}</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  );
};

export default EquipaTable;
