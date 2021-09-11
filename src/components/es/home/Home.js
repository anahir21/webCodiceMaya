import React, { Fragment, useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Parallax } from "react-parallax";
import { Modal } from "../modal/Modal.js";
import { Play } from "../ui/Play";
import venus from "../../../images/home/venus.jpg";
import venus2 from "../../../images/home/venus2.jpg";
import pageCodice from "../../../images/home/codice_02.png";
import especialistas from "../../../images/home/especialistas.jpg";
import cc from "../../../images/home/by-nc-sa.png";
import "./home.css";
import { Footer } from "../footer/Footer.js";
import { Navbar } from "../navbar/Navbar.js";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Fragment>
      <Navbar />
      <Parallax bgImage={venus} strength={200}>
        <div className="parallax-container">
          <div className="text-parallax">
            <h1 className="header__codice">
              Códice Maya
              <br />
              de México
            </h1>
            <h3 className="header__almanaque">El Almanaque de Venus</h3>
          </div>
        </div>
      </Parallax>

      <div className="text-intro">
        <hr />
        <p>
          El Códice Maya de México es el documento <br />
          legible conservado más antiguo de la <br />
          civilización mesoamericana, y el más <br />
          antiguo de américa.
        </p>
      </div>

      <Parallax bgImage={venus2} strength={200}>
        <div className="parallax-container">
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <Play onClick={openModal} />
        </div>
      </Parallax>
      <section id="codice">
        <div className="image-codice">
          <img alt="codice" src={pageCodice} />
        </div>
        <div className="text-codice">
          <div>
            <hr className="line line-left" />
          </div>

          <h3 className="section-subtitle text-left">
            El Códice Maya de México
          </h3>
          <p className="text-gray">
            Descubre el documento más antiguo de América de la mano de
            especialistas que describen la importancia de cultural del códice,
            que a través de sus extraordinarias láminas registran
            sistemáticamente los movimientos del planeta Venus como fenómeno
            astronómico recurrente y observable.
          </p>
        </div>
      </section>

      <section id="studies">
        <div className="text-studies">
          <div>
            <hr className="line line-left" />
          </div>

          <h3 className="section-subtitle text-left">
            Estudios de especialistas
          </h3>
          <p className="text-gray">
            Alejandra Moreno Toscano, Baltazar Brito Guadarrama, Erik Velásquez
            García, John B. Carlson, Ricardo F. Vila Freyer y Esther Orozco
            escribieron los ensayos que acompañan esta edición sobre el “Códice
            Maya de México. Almanaque de Venus”.
          </p>
        </div>
        <div className="image-studies">
          <img src={especialistas} alt="especialistas" />
        </div>
      </section>

      <section id="publication">
        <div className="container-publication">
          <div className="title-publication">
            <hr className="line line-center" />
            <h3 className="section-subtitle text-center">Publicación</h3>
          </div>
          <div id="iframe-container">
            <div id="license">
              <img src={cc} alt="license" />
              <p>
                Atribución/Reconocimiento-NoComercial-CompartirIgual 4.0
                Internacional
              </p>
            </div>

            <Iframe
              src="https://indd.adobe.com/embed/240f6732-3f4a-4038-a23f-b49d6052a2df?startpage=1&allowFullscreen=true"
              frameborder="0"
              allow="fullscreen"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};
