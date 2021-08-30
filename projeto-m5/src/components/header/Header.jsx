import React, { Component } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header-back">
        <div className="logo-img">
          <img src={Logo} />
        </div>
        <nav className="links-pages">
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li><Link to="sobre">Sobre nós</Link></li>          
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/login">Intranet</Link></li>
            </ul>
          </nav>
      </header>
    );
  }
}
