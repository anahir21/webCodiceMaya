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

export const HomeEn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              THE MAYA CODEX <br />
              OF MEXICO
            </h1>
            <h3 className="header__almanaque">VENUS ALMANAC</h3>
          </div>
        </div>
      </Parallax>

      <div className="text-intro">
        <hr />
        <p>
          The Maya Codex of Mexico is the oldest <br />
          preserved legible document of <br />
          Mesoamerican civilization, and the oldest <br />
          in the Americas.
        </p>
      </div>

      <Parallax bgImage={venus2} strength={200}>
        <div className="parallax-container">
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            url="https://www.youtube.com/embed/8-gEB1y9fhc"
          />
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
            The Maya Codex of Mexico
          </h3>
          <p className="text-gray">
            Discover the oldest document in America from the hand of specialists
            who describe the cultural importance of the codex, which through its
            extraordinary images systematically record the movements of the
            planet Venus as a recurrent and observable astronomical phenomenon.
          </p>
        </div>
      </section>

      <section id="studies">
        <div className="text-studies">
          <div>
            <hr className="line line-left" />
          </div>

          <h3 className="section-subtitle text-left">SPECIALIST STUDIES</h3>
          <p className="text-gray">
            Alejandra Moreno Toscano, Baltazar Brito Guadarrama, Erik Velásquez
            García, John B. Carlson, Ricardo F. Vila Freyer and Esther Orozco
            wrote the essays for this edition on the "The Maya Codex of Mexico.
            Almanac of Venus",
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
            <h3 className="section-subtitle text-center">Book</h3>
          </div>
          <div id="license">
            <img src={cc} alt="license" />
            <p>
              Attribution/NonCommercial-NoCommercial-ShareAlike 4.0
              International
            </p>
          </div>
          <div id="iframe-container">
            <Iframe
              src="https://indd.adobe.com/embed/240f6732-3f4a-4038-a23f-b49d6052a2df?startpage=1&allowFullscreen=true"
              frameborder="0"
              allow="fullscreen"
            />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
