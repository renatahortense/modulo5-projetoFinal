import React from "react";
import "../Forms/Forms.module.css";
import axios from 'axios';

const EditAluno = () => {
  const [edit, setEdit] = React.useState({
    nome: "",
    turma: "",
    email: ""
  });



  function handleChange({ target }) {
    const { id, value } = target;
    setEdit({ ...edit, [id]: value });
  }
  function editarAluno(event) {
    event.preventDefault();
    const {nome, turma, email} = edit

    axios.put(`https://csm-api-rest.herokuapp.com/aluno/${nome}`, {nome, turma, email})
    .then((resposta)=> {
      //Levar para pagina Todos alunos
      
      window.location="/alunos"
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <form onSubmit={editarAluno}>
      
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={edit.nome}
        onChange={handleChange}
      />
      
      <label htmlFor="turma">Turma</label>
      <input
        id="turma"
        type="text"
        name="turma"
        value={edit.turma}
        onChange={handleChange}
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        name="email"
        value={edit.email}
        onChange={handleChange}
      />
      <button type="submit">enviar</button>
    </form>
  );
};

export default EditAluno;