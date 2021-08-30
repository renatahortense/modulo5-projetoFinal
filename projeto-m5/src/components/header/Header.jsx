import React, { Component } from "react";
import Logo from "../assets/Logo.png";

export default class Header extends Component {
  render() {
    return (
      <header className="header-back"> 

        <div className="logo-img">
          <img src={Logo}/> 
        </div>

        <nav className="links-pages">
          <ul>
            <li>
              <a to="home">Home</a>
            </li>
            <li>
              <a to="sobre-nos">Sobre nós</a>
            </li>
            <li>
              <a to="/contato">Contato</a>
            </li>
            <li>
              <a to="/login">Intranet</a>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}
