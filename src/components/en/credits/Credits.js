import React, {useEffect} from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import "./creditos.css";

export const Credits = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="view-credits">
      <Navbar />

      <div className="credits">
        <div className="team">
          <p className="bloque">
          General Coordination
            <br />
            Alejandra Moreno Toscano <br />
            Baltazar Brito Guadarrama
          </p>

          <p className="bloque">
            Authors <br />
            Alejandra Moreno Toscano <br />
            Baltazar Brito Guadarrama <br />
            Erik Velásquez García <br />
            John B. Carlson <br />
            Ricardo F. Vila Freyer <br />
            Esther Orozco
          </p>

          <p className="bloque">
          Editorial and digital Coordination <br/>
          Vania Ramírez Islas 
          </p>

          <p className="bloque">
          Editorial Design and Web Development <br/>
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
