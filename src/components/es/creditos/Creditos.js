import React, {useEffect} from "react";
import { Footer } from "../footer/Footer";
import {Menu } from "../menu/Menu";
import "./creditos.css";
export const Creditos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="view-credits">
      <Menu />

      <div className="credits">
        <div className="team">
          <p className="bloque">
            Coordinación general
            <br />
            Alejandra Moreno Toscano Baltazar <br />
            Brito Guadarrama
          </p>

          <p className="bloque">
            Autores <br />
            Alejandra Moreno Toscano <br />
            Baltazar Brito Guadarrama <br />
            Erik Velásquez García <br />
            John B. Carlson <br />
            Ricardo F. Vila Freyer <br />
            Esther Orozco
          </p>

          <p className="bloque">
          Coordinación editorial y digital <br/>
          Vania Ramírez Islas 
          </p>

          <p className="bloque">
          Diseño editorial y desarrollo web <br/>
          Anahí Hernández Olvera <br/>
          Anahí Rosas Rivas
          </p>


        </div>
        <div className="back-credits"></div>
      </div>

      <Footer />
    </section>
  );
};
