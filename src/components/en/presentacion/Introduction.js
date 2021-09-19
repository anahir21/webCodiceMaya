import React, { useEffect } from "react";
import { Navbar } from "../../es/navbar/Navbar";
import "./presentacion.css";
import { Footer } from "../footer/Footer";
import pages from "../../../images/presentacion/paginas-codice.jpg";
import cacao from "../../../images/presentacion/cacao.jpg";
import vectorCacao from "../../../images/presentacion/vector-cacao.jpg";
import pdfMoreno from "../../../documents/moreno_toscano.pdf";

export const Introduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="view">
      <Navbar />
      <div className="header-section">
        <p className="subtitle-section text-center">INTRODUCTION</p>
        <h1 className="section_titles text-center">The Maya Codex of Mexico</h1>
        <h1 className="section_titles">The Venus Almanac</h1>
        <p className="name-author">Alejandra Moreno Toscano</p>
      </div>
      <div className="paginas-codice">
        <img alt="pages" src={pages} />
      </div>
      <article className="article-white">
        <p className="dropcap">
          On the day that artisans from indigenous Otomí communities in San
          Pablito Pahuatlán, in the state of Puebla, selected the Amate tree
          from which they extracted bark following the process used by
          pre-Colombian Mexican cultures and created the medium on which the
          Maya Codex of Mexico would be reproduced, astronomers confirmed the
          presence of water on the surface of the Moon. When the research papers
          began to be drafted, in December 2020, the Hayabusa 2 capsule was
          returning to Earth’s atmosphere, after navigating for eighteen months
          through space with rocky samples from the asteroid Ryugu. These
          samples will help confirm whether hydrogen ions emitted by the Sun
          react with oxygen in the rocks to create water molecules. This would
          help solve the enigma of the formation of water on our planet.
        </p>

        <br />
        <h3 className="section-subtitle top-line">
          {" "}
          The Maya Codex of Mexico is the oldest preserved legible object from
          Mesoamerican civilizations.
        </h3>

        <br />
        <p>
          Was painted on sheets of Amate bark paper from trees that lived
          between AD 1021 and 1154. Its content concerns the synodic revolution
          of the planet Venus, which can be observed with the naked eye as the
          morning star or the evening star. It also refers to Venus’s position
          in relation to the Moon and Sun in each season. In other words, these
          extraordinary sheets contain a systematic record of the movements of
          the planet Venus as a recurrent and observable phenomenon. For the
          present edition we added the subtitle Venus Almanac, to highlight
          this.
        </p>

        <br />
        <p>
          The Ministry of Foreign Affairs, the Ministry of Culture, INAH (the
          National Institute of Anthropology and History), the BNAH (National
          Library of Anthropology and History), as well as the Mexican
          Government’s Cultural Diplomacy Project have supported this
          reproduction of the Maya Codex of Mexico, Venus Almanac, in order to
          acknowledge mankind’s capacity to rethink the world it inhabits:
          decipher it, codify it, document it and understand it from various
          perspectives. Nowadays, when science and technology are closely linked
          to projects involving space, we are reminded that this Mesoamerican
          civilization observed the three most luminous objects in the sky with
          rigor, made coherent calculations and were determined to transmit
          their knowledge to future generations.
        </p>

        <br />
        <p>
          The eminent specialists in anthropology, history of mathematics and
          astronomy, Mayan semiotics and epigraphy, Baltazar Brito Guadarrama,
          Eric Velázquez, John Carlson and Ricardo Vila Freyer who contributed
          the essays that accompany this edition of the Maya Codex of Mexico,
          Venus Almanac, had young readers in mind, as well as university
          students of disciplines such as the mathematics, astronomy and history
          of science, particularly the young Mexicans who six times have won the
          Mathematics Olympiad organized by CIMAT, to introduce them to the
          world of Maya scribes who observed the firmament.
        </p>
        <figure className="gallery-items-2">
          <img src={vectorCacao} alt="vector cacao" />
          <img src={cacao} alt="cacao" />
        </figure>
        <figcaption>
          Ciclo de 8 años de Venus, y un cacaotero abierto (semilla sagrada de
          los mayas).
        </figcaption>

        <br />
        <p>
          The Mayan scribes who observed the sky and, around the year AD 1100,
          systematized and calculated the time it takes two planets to orbit the
          Sun, and a satellite to orbit the Earth, were able to predict
          recurring cycles and derive cultural processes from these planetary
          movements, achieved a great scientific and astronomic feat. We are
          certain that reading the essays that accompany this edition, written
          from different perspectives but analyzing the same images painted by
          the Mayan sages, will help better understand their scientific
          contribution.
        </p>

        <p>
          Seen from Earth in December, when the days grow shorter, Venus seems
          to defy the Sun. At the end of winter, the days lengthen and the
          planet enters a new phase. The story of this endless cycle, which we
          have has been told time and again, has left its cultural mark among
          is. The cyclical and recurrent form in which we understand the world
          could be an incentive to explore space today, as a factor for
          development and wellbeing.
        </p>
      </article>
      <div className="read-more">
        <a href={pdfMoreno} download="moreno_toscano.pdf">
        See more
        </a>
      </div>

      <Footer />
    </section>
  );
};
