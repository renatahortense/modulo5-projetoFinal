import React, { Component } from "react";
import "./HeaderStyle.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header-back">
        <div className="logo-img">
          <img src={Logo} />
        </div>
        <div className="header-links">
        <nav className="links-pages">
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li><Link to="sobre">Nosso time</Link></li>          
              <li><Link to="/login">Portal</Link></li>
            </ul>
          </nav>
          </div>
      </header>
    );
  }
}
