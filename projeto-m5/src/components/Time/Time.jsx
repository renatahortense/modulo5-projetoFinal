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
              <img className="andre-img" src={Andre}/>
            </div>
            <div className="first-link">
              <p className="first-name">André Eigenheer</p>
              <p className="first-github">
                Github:
                <a href="https://github.com/andreeigenheer">
                  https://github.com/andreeigenheer
                </a>
              </p>
              <p className="first-linkedin">
                Linkedin:
                <a href="https://www.linkedin.com/in/andre-eigenheer/">
                  https://www.linkedin.com/in/andre-eigenheer/
                </a>
              </p>
            </div>
          </div>

          <div className="second">
            <div className="second-link">
              <p className="second-name">Emily Ferreira</p>
              <p className="second-github">
                Github:
                <a href="https://github.com/EmilyFZ">
                  https://github.com/EmilyFZ
                </a>
              </p>
              <p className="second-linkedin">
                Linkedin:
                <a href="https://www.linkedin.com/in/emily-ferreira-53144120a/">
                  https://www.linkedin.com/in/emily-ferreira-53144120a//
                </a>
              </p>
            </div>
            <div className="second-img">
              <img className="emily-img" src={Emily} />
            </div>
          </div>

          <div className="third">
            <div className="third-img">
              <img className="lucas-img" src={Lucas} />
            </div>
            <div className="third-link">
              <p className="third-name">Lucas V. Ferreira</p>
              <p className="third-github">
                Github:
                <a href="https://github.com/LucasViniciusF">
                  https://github.com/LucasViniciusF
                </a>
              </p>
              <p className="third-linkedin">
                Linkedin:
                <a href="https://www.linkedin.com/in/lucas-vinicius-ferreira/">
                  https://www.linkedin.com/in/lucas-vinicius-ferreira/
                </a>
              </p>
            </div>
          </div>

          <div className="fourth">
            <div className="fourth-link">
              <p className="fourth-name">Renata Hortense</p>
              <p className="fourth-github">
                Github:
                <a href="https://github.com/renatahortense">
                  https://github.com/renatahortense
                </a>
              </p>
              <p className="fourth-linkedin">
                Linkedin:
                <a href="https://www.linkedin.com/in/renatahortense/">
                  https://www.linkedin.com/in/renatahortense/
                </a>
              </p>
            </div>
            <div className="fourth-img">
              <img className="renata-img" src={Renata} />
            </div>
          </div>

          <div className="fifth">
            <div className="fifth-img">
              <img className="ronaldo-img" src={Ronaldo} />
            </div>
            <div className="fifth-link">
              <p className="fifth-name">Ronaldo Santos</p>
              <p className="fifth-github">
                Github:
                <a href="https://github.com/ronfsantos">
                  https://github.com/ronfsantos
                </a>
              </p>
              <p className="fifth-linkedin">
                Linkedin:
                <a href="https://www.linkedin.com/in/ronaldodsantos/">
                  https://www.linkedin.com/in/ronaldodsantos/
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
