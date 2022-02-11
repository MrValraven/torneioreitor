import React from "react";
import GrupoCard from "../../components/grupo/GrupoCard";

const GroupPage = () => {
  return (
    <div className="groupPage">
      <h1>Equipas</h1>
      <h2>Fase de grupos</h2>
      <div className="groups">
        <GrupoCard></GrupoCard>
      </div>
    </div>
  );
};

export default GroupPage;
