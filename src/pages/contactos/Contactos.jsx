import React from "react";
import Form from "../../components/form/Form";

import "./styles.scss";

const Contactos = () => {
  return (
    <div className="contactos">
      <div className="other-info">
        <h1>Inscrições</h1>
        <p>Tens dúvidas? Não hesites em contactar-nos!</p>
      </div>
      <Form></Form>
    </div>
  );
};

export default Contactos;
