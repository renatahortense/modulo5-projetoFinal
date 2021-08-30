import React from "react";
import Header from "./components/header/Header";
import "./components/header/HeaderStyle.css";
import Footer from "./components/footer/Footer";
import "./components/footer/FooterStyle.css";
import FormAluno from "./components/Forms/FormAluno";
import FormProf from "./components/Forms/FormProf"; 
import Sobre from "./components/sobre/Sobre";
import "./components/sobre/SobreStyle.Css";
import Home from "./components/home/home";
import "./components/home/homeStyle.css";

function App() {
  return (
    <section>
   <Header/> 
   <Home/>
   <Footer/>
   </section>
  );
  }

  export default App; 