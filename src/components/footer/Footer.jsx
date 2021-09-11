import React, { Component } from "react";
import "./FooterStyle.css"

export default class Footer extends Component {

  render () {
    return (
<footer className="footer">

  <div className="first-line-footer">
    <p>Colégio Santa Madalena</p>
  </div>
  <div className="second-line-footer">
    <p>©Todos os direitos reservados</p>
  </div>


</footer>
    )
  }
}