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
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
    if (
      formData.name.length > 0 &&
      formData.email.includes("@") &&
      formData.subject.length > 0 &&
      formData.message.length > 0
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormFilled) {
      return;
    }

    const formDataRequest = {
      sendTo: "desportiva@aaue.pt",
      subject: formData.subject,
      message: {
        origem: "desporto.aaue.pt",
        name: formData.name,
        email: formData.email,
        text: formData.message,
      },
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataRequest),
    };

    await fetch(
      "https://blogposting-api.herokuapp.com/api/sendEmail",
      requestOptions
    )
      .then((data) => {
        if (data.ok) {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>Envia-nos uma mensagem</h1>

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
        <label name="name">Mensagem *</label>
        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange(e)}
          required
        />

        <Button buttonText="Enviar" />
      </form>
    </div>
  );
};

export default Form;
