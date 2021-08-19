import React, { Fragment, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../../images/logo.png"
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import { Mailto } from '../../ui/Mailto'
import {Estudios} from '../estudios/Estudios'

export const Navbar = () => {
    
const [showMenu, setShowMenu] = useState(false);
const handleSetMenu = () => setShowMenu(true);



    return (
        <Fragment>
            <div className = "menu">
                <NavLink to="/">
                    <img alt="logo" src= {logo}></img>
                </NavLink>
                <div className = "links">
                    <NavLink to="/presentacion">Presentación</NavLink>
                    <NavLink to="/codice">Códice Maya de México</NavLink>
                    <li onClick ={Estudios} className ="drop-down-container">Estudios
                        <ul>
                            <li><NavLink to ="/">Moreno Toscano</NavLink></li>
                            <li><NavLink to ="/">Brito Guadarrama</NavLink></li>
                            <li><NavLink to ="/">Velásquez</NavLink></li>
                            <li><NavLink to ="/">Vila Freyer</NavLink></li>
                            <li><NavLink to ="/">B. Carlson</NavLink></li>
                            <li><NavLink to ="/">Orozco</NavLink></li>
                        </ul>
                    </li>
                    <NavLink to="/proyecto-editorial">Proyecto Editorial</NavLink>
                    <NavLink to="/descargas">Descarga</NavLink>
                    <NavLink to="/creditos">Créditos</NavLink>
                </div>
                <select id ="language" >
                    <option>ES</option>
                    <option>EN</option>
                </select>
                <FaBars  className ="bars-icon" onClick = {handleSetMenu}/>
            </div>
            <nav id="menu-overlay" className = {showMenu ? 'is-open': 'is-close'}>
                <GrClose id="close-menu"/>
                <NavLink to="/">
                    <img alt="logo" src= {logo}></img>
                </NavLink>
                <section className ="options">
                    <NavLink to="/presentacion">Presentación</NavLink>
                    <NavLink to="/codice">Códice Maya de México</NavLink>
                    <li className ="drop-down-container">Estudios
                        <ul>
                            <li><Link to ="/">Moreno Toscano</Link></li>
                            <li><Link to ="/">Brito Guadarrama</Link></li>
                            <li><Link to ="/">Velásquez</Link></li>
                            <li><Link to ="/">Vila Freyer</Link></li>
                            <li><Link to ="/">B. Carlson</Link></li>
                            <li><Link to ="/">Orozco</Link></li>
                        </ul>
                    </li>
                    <NavLink to="/proyecto-editorial">Proyecto Editorial</NavLink>
                    <NavLink to="/descargas">Descarga</NavLink>
                    <NavLink to="/creditos">Créditos</NavLink>
                </section>
                <section id="contact">
                    <p>CONTACTO</p>
                    <Mailto label="coordinacion@icosaedro.mx" mailto="mailto:coordinacion@icosaedro.mx"/>
                    <p><Link to ="http://icosaedro.mx/">icosaedro.mx</Link></p>
                    
                </section>


            
            </nav>
        </Fragment>
    )
}

