import React, { Fragment, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Mailto } from "../../ui/Mailto";




export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleSetMenu = () => setShowMenu(true);
  const handleSetMenuClose = () => setShowMenu(false);

  let history =useHistory();
  
  function handlePath (path){
      history.push(path);
  }

  return (
    <Fragment>
      <div className="menu">
        <NavLink to="/">
          <img alt="logo" src={logo}></img>
        </NavLink>
        <div className="links">
          <NavLink to="/presentacion">Presentación</NavLink>
          <NavLink to="/codice">Códice Maya de México</NavLink>
          <li className="drop-down-container">
          <NavLink to="/estudios">Estudios</NavLink>
            <ul>
              <li>
                <NavLink to="/presentacion">Moreno Toscano</NavLink>
              </li>
              <li>
                <NavLink to="/baltazar-brito">Brito Guadarrama</NavLink>
              </li>
              <li>
                <NavLink to="/erik-velasquez">Velásquez</NavLink>
              </li>
              <li>
                <NavLink to="/ricardo-vila">Vila Freyer</NavLink>
              </li>
              <li>
                <NavLink to="/john-carlson">B. Carlson</NavLink>
              </li>
              <li>
                <NavLink to="/esther-orozco">Orozco</NavLink>
              </li>
            </ul>
          </li>
          <NavLink to="/proyecto-editorial">Proyecto Editorial</NavLink>
          <NavLink to="/descargas">Descargas</NavLink>
          <NavLink to="/creditos">Créditos</NavLink>
        </div>
        <select id="language">
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
          <NavLink to="/codice">Códice Maya de México</NavLink>
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
