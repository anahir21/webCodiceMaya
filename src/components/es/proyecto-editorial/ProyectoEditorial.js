import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Footer } from "../footer/Footer";
import { Menu } from "../menu/Menu";
import portada from "../../../images/editorial/portada-editorial.png";
import { Play } from "../ui/Play";
import "./editorial.css";
import papelAmate1 from "../../../images/editorial/papel-amate-1.png";
import papelAmate2 from "../../../images/editorial/papel-amate-2.png";
import { Modal } from "../modal/Modal.js";

export const ProyectoEditorial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <section className="view">
      <Menu />
      <div className="header-section">
        <h1 className="section_titles">El códice y el proyecto editorial</h1>
      </div>

      <Parallax bgImage={portada} strength={200} className="parallax-view">
        <div className="parallax-container-editorial">
          <Play onClick={openModal} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            url="https://www.youtube.com/embed/I79ftTdSlms"
          />
        </div>
      </Parallax>

      <article className="article-white">
        <p className="dropcap">
          El facsimilar del proyecto sobre el Códice Maya de México fue creado
          por artesanos indígenas otomies de la comunidad de San Pablito
          Pahuatlan, quienes a través de los procesos de fabricación artesanal
          de papel crearon los lienzos de la públicación.
        </p>

        <br />
        <p>
          Actualmente, los habitantes de San Pablito es una de las pocas
          comunidades en México que elabora una especie de papel de corteza, el
          amate, que es una palabra nahua que significa tanto papel como
          higuera. Este conocimiento tradicional estuvo aampliamnete arraigado
          en las culturas mexicanas precolombinas (azteca, maya y purépecha,
          principalmente), como se ha documentado desde el siglo XVI.
        </p>

        <br />

        <p>
          La mayoría de los habitantes de San Pablito están relacionados de
          alguna manera con la elaboración de papel amate, que lo convierte en
          la actividad económica más importante para la comunidad. El papel
          amate también es crucial para la salud física y espiritual de la
          comunidad, y es parte de su sistema de rituales y creencias. Este
          último aspecto es particularmente relevante para la comunidad de San
          Pablito; representar imágenes ritualistas en papel es uno de los
          pilares de su cosmovisión. Las deidades, demonios y otros personajes
          representados en papel son cruciales para su sistema espiritual. En
          este sentido, el conocimiento involucrado en los procesos de
          elaboración del papel amate está intrínsecamente conectado a todo el
          sistema de creencias de la comunidad otomí de San Pablito.
        </p>

        <br />
        <p>
          Sin embargo, varios de los procesos de elaboración de papel amate
          están desapareciendo. Existen varios desafíos multifactoriales
          (pobreza, grupos criminales, migración y acceso deficiente a servicios
          esenciales, por mencionar algunos) que afectan a las comunidades
          indígenas en México, y San Pablito no es una excepción. Estos desafíos
          están afectando radicalmente la transmisión del conocimiento sobre la
          fabricación de papel a las generaciones más jóvenes, principalmente
          porque los poseedores del conocimiento (principalmente hombres) migran
          a los Estados Unidos en busca de mejores condiciones de vida.
        </p>
        <br />
       
        <p>
          El proyecto sobre el Códice Maya de México ha coadyucaado en el
          rescate de procesos tradicionales que están desapareciendo por
          diferentes factores, incluyendo el uso de nuevos materiales químicos,
          las condiciones ambientales y la sustentabilidad de las cortezas. Con
          apoyo institucional de la SRE, se han rescatado algunos procesos como
          el uso de cal y cenizas para ablandar el papel, así como el uso de
          corteza de árboles de Mora, rescatando procesos y materiales
          prehispánicos.
        </p>
        <br />

        <p>
          Cabe señalar que la documentación de los procesos, y servirá de
          herramienta a la comunidad local, investigadores e instituciones de la
          sociedad civil comprometidas con la preservación del conocimiento
          tradicional entre los grupos indígenas de México. Preservar,
          salvaguardar y promover el proceso de fabricación de papel y
          transmitirlo a las generaciones futuras, es uno de los principales
          objetivos de este proyecto.
        </p>

        <figure className="gallery-items-2">
          <img src={papelAmate1} alt="vector cacao" />
          <img src={papelAmate2} alt="cacao" />
        </figure>
        <figcaption>Elaboración de papel amate</figcaption>
      </article>

      <Footer />
    </section>
  );
};
