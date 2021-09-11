import React from "react";
import "../Forms/Forms.module.css";
import axios from 'axios';

const EditProf = () => {
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
    const {nome, disciplina, email} = edit

    axios.put(`https://csm-api-rest.herokuapp.com/professor/${nome}`, {nome, disciplina, email})
    .then((resposta)=> {
      //Levar para pagina Todos alunos
      
      window.location="/professores"
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
      
      <label htmlFor="disciplina">Disciplina</label>
      <input
        id="disciplina"
        type="text"
        name="disciplina"
        value={edit.disciplina}
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

export default EditProf;