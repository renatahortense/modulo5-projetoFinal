import React from "react";
import "./PortalButtonStyle.css";
import { Link } from "react-router-dom";

function PortalButton() {
  return (
    <div className="botao">
      <button>
        <Link to="/alunos">Portal do Aluno</Link>
      </button>
      <button>
        <Link to="/professores">Portal do Professor</Link>
      </button>
    </div>
  );
}

export default PortalButton;
