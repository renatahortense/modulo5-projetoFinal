import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Professores() {
  const [professor, setProfessor] = useState([]);

  useEffect(() => {
    let url = "http://csm-api-rest.herokuapp.com/professor";

    const buscaTodos = async () => {
      await axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setProfessor(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    buscaTodos();
  }, []);

  function deleteProf(nome) {
    axios
      .delete(`http://csm-api-rest.herokuapp.com/professor/${nome}`)

      .then((resposta) => {
        //Simula um refresh na página

        window.location = "/professores";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Professores Cadastrados</h1>
      <table>
        <tr>
          <td>Nome</td>
          <td>Disciplina</td>
          <td>Email</td>
        </tr>
        {professor.map((item) => {
          return (
            <tr key={item.ID} className="Lista">
              <td> {item.NOME} </td>
              <td> {item.DISCIPLINA} </td>
              <td> {item.EMAIL} </td>
              <td>
                <Link to={{ pathname: `/editProf/${item.NOME}` }}>
                  {" "}
                  <button>Editar</button>
                </Link>
              </td>
              <td>
                <button onClick={() => deleteProf(item.NOME)}>Apagar</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Professores;