import React from "react";
import "./Forms.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function FormAluno() {
  return (
    <main>
      <h1>Cadastro Aluno</h1>

      <div className="formulario">
        <form>
          
            <label>Nome<input /></label>
            
            <label>Email<input /></label>
            
            <label>Telefone<input /></label>
            
          
        </form>
      </div>
      <div className="alinhar-botao">
            <button className="enviar">Cadastrar</button>
            <button className="enviar">Remover</button>
            <button className="enviar">Alterar</button>
          </div>
    </main>
  );
}

export default FormAluno;
