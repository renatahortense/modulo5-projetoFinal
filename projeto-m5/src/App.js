import React, {Component} from "react";
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FormAluno from "./components/Forms/FormAluno";
import FormProf from "./components/Forms/FormProf";
import Home from "./components/home/home";
import Time from "./components/Time/Time";
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
              <Route path="/time">
                <Time />
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