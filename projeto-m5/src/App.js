import React, {Component} from "react";
import Header from "./components/header/Header";
import "./components/header/HeaderStyle.css";
import Footer from "./components/footer/Footer";
import "./components/footer/FooterStyle.css";
import FormAluno from "./components/Forms/FormAluno";
import FormProf from "./components/Forms/FormProf";
import Home from "./components/home/home";
import "./components/home/homeStyle.css";
import Sobre from "./components/sobre/Sobre";
import "./components/sobre/SobreStyle.Css";
import Contato from "./components/Contato/Contato"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <div className="app">
        <Router> 
        <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/sobre">
                <Sobre />
              </Route>
              <Route path="/contato">
                <Contato />
              </Route>
            </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}
export default App;