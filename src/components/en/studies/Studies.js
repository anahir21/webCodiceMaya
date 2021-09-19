import { React, useState, useEffect } from "react";
import { Navbar } from "../../es/navbar/Navbar";
import { Footer } from "../footer/Footer";
import "./studies.css";
import brito from "../../../images/estudios/brito.jpg";
import carlson from "../../../images/estudios/carlson.jpg";
import morenotoscano from "../../../images/estudios/moreno_toscano.jpg";
import orozco from "../../../images/estudios/orozco.jpg";
import saeko from "../../../images/estudios/saeko.jpg";
import velasquez from "../../../images/estudios/velasquez.jpg";
import vila from "../../../images/estudios/vila.jpg";
import { ButtonMore } from "../ui/ButtonMore";

export const Studies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cardOver, setCardOver] = useState(false);
  const handleCardOver = () => setCardOver(true);
  const handleCard = () => setCardOver(false);

  return (
    <div className="estudios__container">
      <Navbar />
      <div className="container">
        <div className="estudios__container_body">
          <h1 className="section_titles">Studies</h1>
          <hr />

          <h3 className="section-subtitle text-center top-line">
            Experts and their studies
          </h3>
          <p className="text-white text-center">
            Seven experts share their knowledge on various thematic lines:{" "}
            <br />
            history, archaeology, anthropology, astronomy and mathematics.
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
              <h4 className="img_container_header">Introduction</h4>
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
                The Legacy of an Ajtz’ Ihb The Mayan Codex of México
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
                The Historical Context of the Maya Codex of Mexico
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
                The Twenty Masks of Venus: A 20/20 Perspective on El Códice Maya
                de México, antes Grolier – The Oldest Surviving Book on Paper
                from Ancient America
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
                Zero, Mathematics and the Maya
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
                The Mayan Legacy is Love of Knowledge
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
              <h4 className="img_container_header">Iconographical study</h4>
              <h6 className="img_container_author">Saeko Yanagisawa</h6>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
