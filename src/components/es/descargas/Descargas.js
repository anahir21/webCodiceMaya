import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { Footer } from "../footer/Footer";

import "./descargas.css";

import codice01 from "../../../images/descargas/codice_01.png";
import codice02 from "../../../images/descargas/codice_02.png";
import codice03 from "../../../images/descargas/codice_03.png";
import codice04 from "../../../images/descargas/codice_04.png";
import codice05 from "../../../images/descargas/codice_05.png";
import codice06 from "../../../images/descargas/codice_06.png";
import codice07 from "../../../images/descargas/codice_07.png";
import codice08 from "../../../images/descargas/codice_08.png";
import codice09 from "../../../images/descargas/codice_09.png";
import codice10 from "../../../images/descargas/codice_10.png";
import cc from "../../../images/descargas/by-nc-sa.png";


export const Descargas = () => {
  return (
    <section className=" view downloads">
      <Navbar />
      <h1 className="section_titles">Descargas</h1>
      <div className="grid-pages">
        <div className="folio-card">
          <img src={codice01} alt="codice-folio-1" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice01}
            target="_blank"
            download="codice-maya-folio1.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice02} alt="codice-folio-2" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice02}
            target="_blank"
            download="codice-maya-folio2.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice03} alt="codice-folio-3" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice03}
            target="_blank"
            download="codice-maya-folio3.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice04} alt="codice-folio-4" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice04}
            target="_blank"
            download="codice-maya-folio4.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice05} alt="codice-folio-5" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice05}
            target="_blank"
            download="codice-maya-folio5.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice06} alt="codice-folio-6" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice06}
            target="_blank"
            download="codice-maya-folio6.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice07} alt="codice-folio-7" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice07}
            target="_blank"
            download="codice-maya-folio7.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice08} alt="codice-folio-8" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice08}
            target="_blank"
            download="codice-maya-folio8.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice09} alt="codice-folio-9" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice09}
            target="_blank"
            download="codice-maya-folio9.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>

        <div className="folio-card">
          <img src={codice10} alt="codice-folio-10" />

          <p className="figcaption">Folio actual 1, folio original 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, 8/11 DE OCTUBRE DE 1133 </p>
          </div>

          <Link
            to={codice10}
            target="_blank"
            download="codice-maya-folio9.png"
            className="download-button"
          >
            <FiDownload />
          </Link>
        </div>
      </div>

      <div className="license-images">
        <img src={cc} alt="license" />
        <p>Atribución/Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional</p>
      </div>

      <Footer />
    </section>
  );
};
