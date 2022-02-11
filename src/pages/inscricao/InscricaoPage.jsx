import React from "react";
import Form from "../../components/form/Form";

import "./styles.scss";

const InscricaoPage = () => {
  return (
    <div className="inscricoes">
      <div className="other-info">
        <h1>Inscrições</h1>
        <p>
          Faz o <span>download</span> da folha de inscrição e entrega na tua
          AAUE!
        </p>
        <p>Em caso de dúvidas não hesites em contactar-nos!</p>
      </div>
      <Form></Form>
    </div>
  );
};

export default InscricaoPage;
