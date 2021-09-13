import { React, useState, useEffect } from "react";
import { Navbar } from "../../es/navbar/Navbar";
import "./estudios.css";
import brito from "../../../images/estudios/brito.jpg";
import carlson from "../../../images/estudios/carlson.jpg";
import morenotoscano from "../../../images/estudios/moreno_toscano.jpg";
import orozco from "../../../images/estudios/orozco.jpg";
import saeko from "../../../images/estudios/saeko.jpg";
import velasquez from "../../../images/estudios/velasquez.jpg";
import vila from "../../../images/estudios/vila.jpg";
import { ButtonMore } from "../ui/ButtonMore";

export const Estudios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /*   let history =useHistory();
  
  function handlePath (path){
      history.push(path);
  } */

  const [cardOver, setCardOver] = useState(false);
  const handleCardOver = () => setCardOver(true);
  const handleCard = () => setCardOver(false);


  return (
    <div className="estudios__container">
      <Navbar />
      <div className="container">
        <div className="estudios__container_body">
          <h1 className="section_titles">Estudios</h1>
          <hr />

          <h3 className="section-subtitle text-center top-line">
            Los Expertos y sus estudios
          </h3>
          <p>
            Siete expertos comparten sus conocimientos sobre diversas líneas
            temáticas: <br />
            historia, arqueología, antropología, astronomía y matemáticas{" "}
          </p>

          <section className="estudios__container_img">
           
            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="Moreno Toscano"
                  src={morenotoscano}
                />
                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/presentacion"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">Presentación</h4>
              <h6 className="img_container_author">Alejandra Moreno Toscano</h6>
            </div>

           
            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="Baltazar Brito Guadarrama"
                  src={brito}
                />

                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/baltazar-brito"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">
               
                El Legado de un Ajtz' IHB El códice Maya de México
              </h4>
              <h6 className="img_container_author">
               
                Baltazar Brito Guadarrama
              </h6>
            </div>
           
            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="Erik Velasquez Garcia"
                  src={velasquez}
                />

                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/erik-velasquez"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">
                El contexto histórico del códice maya de méxico
              </h4>
              <h6 className="img_container_author">Erik Velásquez García</h6>
            </div>
           

            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="John B. Carlson"
                  src={carlson}
                />

                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/john-carlson"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">
                Las Veinte máscaras de Venus: una perspectiva 20/20 del Códice
                Maya de México, antes Grolier. El más antiguo libro en papel de
                América que se conserva
              </h4>
              <h6 className="img_container_author">John B. Carlson</h6>
            </div>
           
            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="Ricardo F. Vila Freyer"
                  src={vila}
                />

                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/ricardo-vila"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">
                Cero, matemáticas y los mayas
              </h4>
              <h6 className="img_container_author">Ricardo F. Vila Freyer</h6>
            </div>
           
            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="Esther Orozco Orozco"
                  src={orozco}
                />

                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/esther-orozco"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">
                El Legado Maya es de amor al conocimiento
              </h4>
              <h6 className="img_container_author">Esther Orozco Orozco</h6>
            </div>
           
            <div className="card">
              <div
                className="container-over"
                onMouseOver={handleCardOver}
                onMouseLeave={handleCard}
              >
                <img
                  className="img_author"
                  alt="Saeko Yanagisawa"
                  src={saeko}
                />

                <div className={cardOver ? "card-over" : "card-leave"}>
                  <ButtonMore path={"/codice"} />
                </div>
              </div>
              <hr />
              <h4 className="img_container_header">Estudio Iconográfico</h4>
              <h6 className="img_container_author">Saeko Yanagisawa</h6>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
