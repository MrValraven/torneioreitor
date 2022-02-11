import React, { useState } from "react";

import "./styles.scss";

import Button from "../button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label name="name">Nome *</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        required
      />
      <label name="name">Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
        required
      />
      <label name="name">Assunto *</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={(e) => handleChange(e)}
        required
      />
      <label name="name">Menssagem *</label>
      <textarea
        type="text"
        name="message"
        value={formData.message}
        onChange={(e) => handleChange(e)}
        required
      />

      <Button buttonText="Enviar" />
    </form>
  );
};

export default Form;
