import React, { useRef } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ApiPage from "./pages/api/ApiPage";
import CalendarioPage from "./pages/calendario/CalendarioPage";
import GroupPage from "./pages/grupos/GroupPage";
import Homepage from "./pages/home/Homepage";
import LeaderboardPage from "./pages/leaderboard/LeaderboardPage";
import RegulamentoPage from "./pages/regulamento/RegulamentoPage";

import "./App.scss";
import Contactos from "./pages/contactos/Contactos";

const App = () => {
  const appRef = useRef(null);
  return (
    <div className="app" ref={appRef}>
      <Header appRef={appRef} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/api" component={ApiPage} />
        <Route exact path="/calendario" component={CalendarioPage} />
        <Route exact path="/grupos" component={GroupPage} />
        <Route exact path="/leaderboard" component={LeaderboardPage} />
        <Route exact path="/regulamento" component={RegulamentoPage} />
        <Route exact path="/contactos" component={Contactos} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
