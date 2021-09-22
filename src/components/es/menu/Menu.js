import React, { Fragment, useState } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import "./Menu.css";
import logo from "../../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Mailto } from "../ui/Mailto";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleSetMenu = () => setShowMenu(true);
  const handleSetMenuClose = () => setShowMenu(false);

  let history = useHistory();
  let location = useLocation();
  function handlePath(path) {
    history.push(path);
  }
  const handleLanguage = () => {
    switch (location.pathname) {
      case "/":
        handlePath("/en");
        break;
      case "/es/presentacion":
        handlePath("/en/introduction");
        break;
      case "/es/codice":
        handlePath("/en/codex");
        break;
      default:
        handlePath("/");
    }
  };

  return (
    <Fragment>
      <div className="menu">
        <NavLink to="/">
          <h2 className="logo">Códice <br/>Maya de<br/> México</h2>
        </NavLink>
        <div className="links">
          <NavLink to="/es/presentacion">Presentación</NavLink>
          <NavLink to="/es/codice">Códice Maya de México</NavLink>
          <NavLink to="/es/estudio-iconografico">Iconografía</NavLink>
          <li className="drop-down-container">
          <NavLink to="/es/estudios">Estudios</NavLink>
            <ul>
              <li>
                <NavLink to="/es/presentacion">Moreno Toscano</NavLink>
              </li>
              <li>
                <NavLink to="/es/baltazar-brito">Brito Guadarrama</NavLink>
              </li>
              <li>
                <NavLink to="/es/erik-velasquez">Velásquez</NavLink>
              </li>
              <li>
                <NavLink to="/es/ricardo-vila">Vila Freyer</NavLink>
              </li>
              <li>
                <NavLink to="/es/john-carlson">B. Carlson</NavLink>
              </li>
              <li>
                <NavLink to="/es/esther-orozco">Orozco</NavLink>
              </li>
            </ul>
          </li>
          <NavLink to="/es/proyecto-editorial">Proyecto Editorial</NavLink>
          <NavLink to="/es/descargas">Descargas</NavLink>
          <NavLink to="/es/creditos">Créditos</NavLink>
        </div>
        <select id="language" onChange={()=>handleLanguage()}>
          <option>ES</option>
          <option>EN</option>
        </select>
        <FaBars className="bars-icon" onClick={handleSetMenu} />
      </div>
      <nav id="menu-overlay" className={showMenu ? "is-open" : "is-close"}>
      
        <AiOutlineClose id="close-menu" onClick = {handleSetMenuClose}/>
        <NavLink to="/">
          <img alt="logo" src={logo}></img>
        </NavLink>
        <section className="options">
          <NavLink to="/presentacion">Presentación</NavLink>
          <NavLink to="/es/codice">Códice Maya de México</NavLink>
          <NavLink to="/es/estudio-iconografico">Iconografía</NavLink>
          <li className="drop-down-container">
          <NavLink to="/estudios">Estudios</NavLink>
            <ul>
              <li>
                <Link to="/presentacion">Moreno Toscano</Link>
              </li>
              <li>
                <Link to="/baltazar-brito">Brito Guadarrama</Link>
              </li>
              <li>
                <Link to="/erik-velasquez">Velásquez</Link>
              </li>
              <li>
                <Link to="/ricardo-vila">Vila Freyer</Link>
              </li>
              <li>
                <Link to="/john-carlson">B. Carlson</Link>
              </li>
              <li>
                <Link to="/esther-orozco">Orozco</Link>
              </li>
            </ul>
          </li>
          <NavLink to="/proyecto-editorial">Proyecto Editorial</NavLink>
          <NavLink to="/descargas">Descargas</NavLink>
          <NavLink to="/creditos">Créditos</NavLink>
     
        </section>
        <section id="contact">
          <p>CONTACTO</p>
          <Mailto
            label="coordinacion@icosaedro.mx"
            mailto="mailto:coordinacion@icosaedro.mx"
          />
          <p>
            <Link to="http://icosaedro.mx/">icosaedro.mx</Link>
          </p>
        </section>
      </nav>
    </Fragment>
  );
};
