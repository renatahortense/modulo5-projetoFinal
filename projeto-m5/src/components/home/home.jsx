import React, { Component } from "react";
import First from "../assets/first-pic.jpg";
import Second from "../assets/second-pic.jpg";
import Third from "../assets/third-pic.jpg";
import './homeStyle.css'

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="body-about-home">
          <div className="first-line">
            <div className="first-part">
              <p>Colégio Santa Madalena</p>               
            </div>
            <div className="first-pic">
              <img src={First}/>
            </div>
          </div>

          <div className="second-line">
                  <div className="second-pic">
                      <img src={Second}/>
                  </div>
                  <div className="second-part">
                          <p>Muito além de um simples colégio</p>
                  </div>
              </div>    

              <div className="third-line">
                  <div className="third-part">
                              <p>Uma nova maneira de ensinar!</p>
                  </div>
                  <div className="third-pic">
                              <img src={Third}/>
                  </div>
              </div>
        </div>
      </section>
    )
  }
}