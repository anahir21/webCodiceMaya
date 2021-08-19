import React from "react";
import { Navbar } from "../../es/navbar/Navbar";
import "./estudios.css";

export const Estudios = () => {
  return (
    <div className="estudios__container">
      <Navbar />
      <div className="container">
      <div className="estudios__container_body">
        <h1 className="section_titles">Estudios</h1>
        <h3 className="section-subtitle">Los Expertos y sus estudios</h3>
        <h6>
          Siete expertos comparten sus conocimientos sobre diversas líneas
          temáticas <br />
          historia, arqueología, antropología, astronomía y matemáticas{" "}
        </h6>

        <section className="estudios__container_img">
          <div>
            <h4 className="img_container_header" top-line>
              Presentación
            </h4>
            <h6 className="img_container_author">Alejandra Moreno Toscano</h6>
          </div>

          <div>
            <h4 className="img_container_header" top-line>
              El Legado de un Ajtz' IHB El códice Maya de México
            </h4>
            <h6 className="img_container_author">Baltazar Brito Guadarrama</h6>
          </div>

          <div>
            <h4 className="img_container_header">
    
              El contexto histórico del códice maya de méxico
            </h4>
            <h6 className="img_container_author">Erik Velasquez Garcia</h6>
          </div>

          <div>
            <h4 className="img_container_header">
              Las Veinte máscaras de Venus: una perspectiva 20/20 del Códice
              Maya de México, antes Grolier. El más antiguo libro en papel de
              América que se conserva
            </h4>
            <h6 className="img_container_author">John B. Carlson</h6>
          </div>

          <div>
            <h4 className="img_container_header">
              Cero, matemáticas y los mayas
            </h4>
            <h6 className="img_container_author">Ricardo F. Vila Freyer</h6>
          </div>

          <div>
            <h4 className="img_container_header">
              El Legado Maya es de amor al conocimiento
            </h4>
            <h6 className="img_container_author">Esther Orozco Orozco</h6>
          </div>

          <div>
            <h4 className="img_container_header">Estudio Iconográfico</h4>
            <h6 className="img_container_author">Saeko Yanagisawa</h6>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};
