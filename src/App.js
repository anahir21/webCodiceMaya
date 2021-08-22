import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { Navbar } from "./components/es/navbar/Navbar";

import { Home } from './components/es/home/Home';
import { Codice } from './components/es/codice/Codice';
import { Estudios } from './components/es/estudios/Estudios';
import { Presentacion } from './components/es/presentacion/Presentacion';
import { ProyectoEditorial } from './components/es/proyecto-editorial/ProyectoEditorial';
import { Descargas } from './components/es/descargas/Descargas';
import { Creditos } from './components/es/creditos/Creditos';


function App() {
  return (
    <Router>
      <div>
        
        <Switch>

          <Route path="/" exact component = {Home}>
          </Route>

          <Route path="/presentacion" exact component = {Presentacion}>
          </Route>

          <Route path="/codice" component = {Codice}>
          </Route>

          <Route path="/estudios" component = {Estudios}>
          </Route>

          <Route path="/proyecto-editorial" component = {ProyectoEditorial}>
          </Route>

          <Route path="/descargas" component = {Descargas}>
          </Route>

          <Route path="/creditos" component = {Creditos}>
          </Route>
      
    </Switch>
      </div>
      
    
    </Router>
  );
}

export default App;
