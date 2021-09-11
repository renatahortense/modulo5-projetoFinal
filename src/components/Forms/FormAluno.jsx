import React from "react";
import "./Forms.module.css";
import axios from "axios";

const FormAluno = () => {
  const [form, setForm] = React.useState({
    nome: "",
    turma: "",
    email: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function inserirAluno(event) {
    event.preventDefault();
    const { nome, turma, email } = form;

    axios
      .post("https://csm-api-rest.herokuapp.com/aluno", { nome, turma, email })
      .then((resposta) => {
        //Levar para pagina Todos alunos

        window.location = "/alunos";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Cadastrar Aluno</h1>
      <form onSubmit={inserirAluno}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="turma">Turma</label>
        <input
          id="turma"
          type="text"
          name="turma"
          value={form.turma}
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

export default FormAluno;
