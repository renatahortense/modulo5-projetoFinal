import React, { Component } from "react";
import "./PortalButtonStyle.css";
import { Link } from "react-router-dom";

function PortalButton() {
  return (
    <div className="botao">
      <button>
        <Link to="/login/aluno">Portal do Aluno</Link>
      </button>
      <button>
        <Link to="/login/professor">Portal do Professor</Link>
      </button>
    </div>
  );
}

export default PortalButton;
