import React from "react";
import GrupoCard from "../../components/grupo/GrupoCard";

import grupos from "../../static/grupos.json";

const GroupPage = () => {
  return (
    <div className="groupPage">
      <h1>Equipas</h1>
      <h2>Fase de grupos</h2>
      <div className="groups">
        <GrupoCard grupo={grupos["grupoA"]} groupName="Grupo A" />
        <GrupoCard grupo={grupos["grupoB"]} groupName="Grupo B" />
        <GrupoCard grupo={grupos["grupoC"]} groupName="Grupo C" />
        <GrupoCard grupo={grupos["grupoD"]} groupName="Grupo D" />
      </div>
    </div>
  );
};

export default GroupPage;
