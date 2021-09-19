import React, { Fragment, useState } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Mailto } from "../ui/Mailto";

export const Navbar = () => {
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
      case "/Estudios":
        handlePath("/es/estudios");
        break;
      default:
        handlePath("/");
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  const handleSetMenu = () => setShowMenu(true);
  const handleSetMenuClose = () => setShowMenu(false);

  return (
    <Fragment>
      <div className="menu">
        <NavLink to="/">
          <h2 className="logo">
            The Maya <br />
            Codex of
            <br /> Mexico
          </h2>
        </NavLink>
        <div className="links">
          <NavLink to="/es/presentacion">Introduction</NavLink>
          <NavLink to="{()=>handlePath('Codice')}">
            The Maya Codex of Mexico
          </NavLink>
          <NavLink to="/es/estudio-iconografico">Iconography</NavLink>
          <li className="drop-down-container">
            <NavLink to="/es/estudios">Studies</NavLink>
            <ul>
              <li>
                <NavLink to="/es/presentacion">Moreno Toscano</NavLink>
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
          <NavLink to="/proyecto-editorial">Editorial Project</NavLink>
          <NavLink to="/descargas">Downloads</NavLink>
          <NavLink to="/creditos">Credits </NavLink>
        </div>
        <select id="language" onChange={() => handleLanguage()}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <FaBars className="bars-icon" onClick={handleSetMenu} />
      </div>
      <nav id="menu-overlay" className={showMenu ? "is-open" : "is-close"}>
        <AiOutlineClose id="close-menu" onClick={handleSetMenuClose} />
        <NavLink to="/">
          <img alt="logo" src={logo}></img>
        </NavLink>
        <section className="options">
          <NavLink to="/es/presentacion">Introduction</NavLink>
          <NavLink to="/es/codice">The Maya Codex of Mexico</NavLink>
          <NavLink to="/es/estudio-iconografico">Iconography</NavLink>
          <li className="drop-down-container">
            <NavLink to="/es/estudios">Studies</NavLink>
            <ul>
              <li>
                <Link to="/es/presentacion">Moreno Toscano</Link>
              </li>
              <li>
                <Link to="/es/baltazar-brito">Brito Guadarrama</Link>
              </li>
              <li>
                <Link to="/es/erik-velasquez">Velásquez</Link>
              </li>
              <li>
                <Link to="/es/ricardo-vila">Vila Freyer</Link>
              </li>
              <li>
                <Link to="/es/john-carlson">B. Carlson</Link>
              </li>
              <li>
                <Link to="/es/esther-orozco">Orozco</Link>
              </li>
            </ul>
          </li>
          <NavLink to="/es/proyecto-editorial">Editorial Project</NavLink>
          <NavLink to="/es/descargas">Download</NavLink>
          <NavLink to="/es/creditos">Credits</NavLink>
        </section>
        <section id="contact">
          <p>CONTACT</p>
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
