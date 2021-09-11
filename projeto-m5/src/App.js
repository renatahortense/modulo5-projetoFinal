import React, { Component } from "react";
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FormAluno from "./components/Forms/FormAluno";
import FormProf from "./components/Forms/FormProf";
import Home from "./components/home/home";
import Time from "./components/Time/Time";
import PortalButton from "./components/PortalButton/PortalButton";
import Alunos from "./components/alunos/Alunos";
import Professores from "./components/professores/professores";
import EditAluno from "./components/alunos/EditAlunos"
import EditProf from "./components/professores/editProf"
import Page404 from "./components/Page404/Page404";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
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
            <Route exact path="/login">
              <PortalButton />
            </Route>
            <Route exact path="/alunos">
              <FormAluno />
              <Alunos />
            </Route>
            <Route exact path="/professores">
              <FormProf />
              <Professores />
            </Route>
            <Route exact path="/editAluno/:nome">
              <EditAluno />
            </Route>
            <Route exact path="/editProf/:nome">
              <EditProf />
            </Route>
            <Route path= "*">
              <Page404 />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}
export default App;