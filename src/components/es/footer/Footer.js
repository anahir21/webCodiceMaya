import React from "react";
import { NavLink} from "react-router-dom";
import "./footer.css";
import logos from "../../../images/logos-footer.png";
import logo from "../../../images/logo.png";
export const Footer = () => {
  return (
    <div id="container-footer">
      <hr className="line-large" />
      <footer>
          <div className="logos">
          <img src={logos} alt="logos" />
          </div>
          <div className="site-map">
              <nav>
              <p>Secciones</p>    
              <NavLink to="/presentacion">Presentación</NavLink>
              <NavLink to="/codice">Códice Maya de México</NavLink>
              <NavLink to="/estudios">Estudios</NavLink>
              <NavLink to="/descargas">Descargas</NavLink>
              <NavLink to="/creditos">Créditos</NavLink>
              </nav>
              
          </div>
        
      </footer>
      <hr className="line-large" />
      <div className="legal">
      <img src={logo}alt="logo"/>
      <p>© 2021 – Secretaría de Relaciones Exteriores</p>
      </div>
    </div>
  );
};
