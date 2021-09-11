import React, { Component } from "react";
import "./Time.css";
import Andre from "../assets/Andre.jpeg";
import Emily from "../assets/Emily.jpeg";
import Lucas from "../assets/Lucas.jpeg";
import Renata from "../assets/Renata.jpg";
import Ronaldo from "../assets/Ronaldo.jpeg";

export default class Header extends Component {
  render() {
    return (
      <section>
        <div className="body-about">
          <div className="school">
            <h1>Conheça nosso time:</h1>
          </div>
          <div className="first">
            <div className="first-img">
              <img className="andre-img" src={Andre} alt=""/>
            </div>
            <div className="first-link">
              <p className="first-name">André Eigenheer</p>
              <p className="first-github">
                <a href="https://github.com/andreeigenheer">
                  Github
                </a>
              </p>
              <p className="first-linkedin">
                <a href="https://www.linkedin.com/in/andre-eigenheer/">
                  Linkedin
                </a>
              </p>
            </div>
          </div>

          <div className="fourth">
            <div className="fourth-link">
              <p className="fourth-name">Renata Hortense</p>
              <p className="fourth-github">
                <a href="https://github.com/renatahortense">
                  Github
                </a>
              </p>
              <p className="fourth-linkedin">
                <a href="https://www.linkedin.com/in/renatahortense/">
                  Linkedin
                </a>
              </p>
            </div>
            <div className="fourth-img">
              <img className="renata-img" src={Renata} alt=""/>
            </div>
          </div>


          <div className="third">
            <div className="third-img">
              <img className="lucas-img" src={Lucas} alt="" />
            </div>
            <div className="third-link">
              <p className="third-name">Lucas V. Ferreira</p>
              <p className="third-github">
                <a href="https://github.com/LucasViniciusF">
                  Github
                </a>
              </p>
              <p className="third-linkedin">
                <a href="https://www.linkedin.com/in/lucas-vinicius-ferreira/">
                  Linkedin
                </a>
              </p>
            </div>
          </div>

          <div className="fifth">
            <div className="fifth-link">
              <p className="fifth-name">Ronaldo Santos</p>
              <p className="fifth-github">
                <a href="https://github.com/ronfsantos">
                  Github
                </a>
              </p>
              <p className="fifth-linkedin">
                <a href="https://www.linkedin.com/in/ronaldodsantos/">
                  Linkedin
                </a>
              </p>
            </div>
            <div className="fifth-img">
              <img className="ronaldo-img" src={Ronaldo} alt="" />
            </div>
          </div>

          <div className="second">
            <div className="second-img">
              <img className="emily-img" src={Emily} alt="" />
            </div>
            <div className="second-link">
              <p className="second-name">Emily Ferreira</p>
              <p className="second-github">
                <a href="https://github.com/EmilyFZ">
                  Github
                </a>
              </p>
              <p className="second-linkedin">
                <a href="https://www.linkedin.com/in/emily-ferreira-53144120a/">
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
