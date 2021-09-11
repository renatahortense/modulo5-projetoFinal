import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Alunos() {
  const [Aluno, setAluno] = useState([]);

  useEffect(() => {
    let url = "http://csm-api-rest.herokuapp.com/aluno";

    const buscaTodos = async () => {
      await axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setAluno(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    buscaTodos();
  }, []);

  function deleteAluno(nome) {
    axios.delete(`http://csm-api-rest.herokuapp.com/aluno/${nome}`)

      .then((resposta) => {
        //Simula um refresh na página

        window.location = "/alunos"
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Alunos Cadastrados</h1>
      <table>
        <tr>
          <td>Nome</td>
          <td>Turma</td>
          <td>Email</td>
        </tr>
        {Aluno.map((item) => {
          return (
            <tr key={item.ID} className="Lista">
              <td> {item.NOME} </td>
              <td> {item.TURMA} </td>
              <td> {item.EMAIL} </td>
              <td>
                <Link to={{ pathname: `/editAluno/${item.NOME}` }}>
                  {" "}
                  <button>Editar</button>
                </Link>
              </td>
              <td>
                <button onClick={() => deleteAluno(item.NOME)} >Apagar</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Alunos;