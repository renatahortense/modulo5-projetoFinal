import React from "react";
import "./Forms.module.css";
import axios from "axios";

const FormProf = () => {
  const [form, setForm] = React.useState({
    nome: "",
    disciplina: "",
    email: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function inserirProf(event) {
    event.preventDefault();
    const { nome, disciplina, email } = form;

    axios
      .post("http://csm-api-rest.herokuapp.com/professor", {
        nome,
        disciplina,
        email,
      })
      .then((resposta) => {
        window.location = "/professores";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Cadastrar Professor</h1>
      <form onSubmit={inserirProf}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="disciplina">Disciplina</label>
        <input
          id="disciplina"
          type="text"
          name="disciplina"
          value={form.disciplina}
          onChange={handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default FormProf;
