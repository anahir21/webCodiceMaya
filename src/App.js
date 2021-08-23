import React from "react";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { animated, useTransition } from "react-spring";

import "./App.css";

import { Home } from "./components/es/home/Home";
import { Codice } from "./components/es/codice/Codice";
import { Estudios } from "./components/es/estudios/Estudios";
import { Presentacion } from "./components/es/presentacion/Presentacion";
import { ProyectoEditorial } from "./components/es/proyecto-editorial/ProyectoEditorial";
import { Descargas } from "./components/es/descargas/Descargas";
import { Creditos } from "./components/es/creditos/Creditos";

function App() {
  const  location  = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, width: "90%" },
    enter: { opacity: 1, width: "100%" },
  
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      
      <Switch location={item}>
        <Route path="/" exact component={Home}></Route>

        <Route path="/presentacion" exact component={Presentacion}></Route>

        <Route path="/codice" component={Codice}></Route>

        <Route path="/estudios" component={Estudios}></Route>

        <Route path="/proyecto-editorial" component={ProyectoEditorial}></Route>

        <Route path="/descargas" component={Descargas}></Route>

        <Route path="/creditos" component={Creditos}></Route>
      </Switch>
    </animated.div>
  ));
}

export default App;
