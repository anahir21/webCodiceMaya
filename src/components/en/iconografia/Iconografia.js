import React from "react";
import { Navbar } from "../navbar/Navbar";

import { Emmiter } from "./emiter";
import { useInView } from "react-intersection-observer";

import "./iconografia.css";

import codice_03 from "../../../images/iconografia/codice_03.png";
import { ImageFolio } from "./ImageFolio";
import { TextFolio } from "./TextFolio";

export const Iconography = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <section className="section-iconography">
      <Navbar />
      <div className="cover-iconography">
        <div className="title-iconography">
          <div className="author-section-iconography">
            <div>
              <hr />
            </div>
            <p className="author-name left-text">Saeko Yanagisawa</p>
          </div>
          <h1 className="section_titles_iconography">
            ICONOGRAPHIC <br /> STUDY
          </h1>
        </div>

        <div className="cover-iconography-image">
          <img src={codice_03} alt="codice-maya-folio-3" />
        </div>
      </div>
      <div ref={ref} className="intro-iconography">
        <p className="text-gray">
          The Mayans divided the synodic cycle of this star into four phases
          apparent from Earth. Phase one, when Venus appears as the Morning
          Star; phase two, it hides behind the Sun; phase three, it reappears as
          the Evening Star; and phase four, it disappears again in the shadow of
          the Sun. Each phase is presided over by a god with aggressive
          behavior. They are military, death and underworld deities. The omens
          of each phase are ominous, nefarious and belligerent, because they
          believed that when Venus was hidden, she was in the Underworld. The
          cycle begins on the day 1 Ajaw, the last day recorded on the last page
          that today is lost. It is the Venusian date par excellence, it starts
          and ends on this date. 1 Ajaw is the alpha and the omega of the whole
          construction of the Venusian almanac.
        </p>
      </div>

      <div className="folio-container">
        <Emmiter>
          <div className="scrollytelling">
            <div className={inView ? "no-sticky" : "is-sticky"}>
              <ImageFolio />
            </div>

            <TextFolio></TextFolio>
          </div>
        </Emmiter>
      </div>
      <div></div>
    </section>
  );
};
