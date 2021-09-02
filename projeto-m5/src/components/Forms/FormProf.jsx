import React from "react";
import "./Forms.module.css";

function FormProf() {
  return (
    <main>
      <h1>Cadastro Professor</h1>
      <form>
        <div className="formulario">
          <label>Nome</label>
          <input />
          <label>Email</label>
          <input />
          <label>Telefone</label>
          <input />
        </div>
        <button className="enviar">Cadastrar</button>
        <button className="enviar">Remover</button>
        <button className="enviar">Alterar</button>
      </form>
    </main>
  );
}
export default FormProf;
