import React, {useEffect} from "react";
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

import codice01_th from "../../../images/descargas/codice_01_th.png";
import codice02_th from "../../../images/descargas/codice_02_th.png";
import codice03_th from "../../../images/descargas/codice_03_th.png";
import codice04_th from "../../../images/descargas/codice_04_th.png";
import codice05_th from "../../../images/descargas/codice_05_th.png";
import codice06_th from "../../../images/descargas/codice_06_th.png";
import codice07_th from "../../../images/descargas/codice_07_th.png";
import codice08_th from "../../../images/descargas/codice_08_th.png";
import codice09_th from "../../../images/descargas/codice_09_th.png";
import codice10_th from "../../../images/descargas/codice_10_th.png";
import cc from "../../../images/descargas/by-nc-sa.png";


export const Descargas = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className=" view downloads">
      <Navbar />
      <h1 className="section_titles text-left">Descargas</h1>
      <div className="grid-pages">
        <div className="folio-card">
          <img src={codice01_th} alt="codice-folio-1" />

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
          <img src={codice02_th} alt="codice-folio-2" />

          <p className="figcaption">Folio actual 2, folio original 10</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.4.14 13 HIX 12 ZODZ, 6/9 DE ENERO DE 1134</p>
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
          <img src={codice03_th} alt="codice-folio-3" />

          <p className="figcaption">Folio actual 3, folio original 11</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.17.4  3 KAN 2 KAYAB. 13/16 DE SEPTIEMBRE DE 1134 </p>
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
          <img src={codice04_th} alt="codice-folio-4" />

          <p className="figcaption">Folio actual 4, folio original 12</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.17.12 11 EB 10 KAYAB, 21/24 DE SEPTIEMBRE DE 1134  </p>
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
          <img src={codice05_th} alt="codice-folio-5" />

          <p className="figcaption">Folio actual 5, folio original 13</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.9.11.18 13 LAMAT 1 ZAC, 15/18 DE MAYO DE 1135  </p>
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
          <img src={codice06_th} alt="codice-folio-6" />

          <p className="figcaption">Folio actual 6, folio original 14</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.9.15.18 12 EDZNAB 11 MUAN, 13/16 DE AGOSTO DE 1135 </p>
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
          <img src={codice07_th} alt="codice-folio-7" />

          <p className="figcaption">Folio actual 7, folio original 15</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.10.10.8 2 LAMAT 16 CHEEN, 19/22 DE ABRIL DE 1136 </p>
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
          <img src={codice08_th} alt="codice-folio-8" />

          <p className="figcaption">Folio actual 8, folio original 16</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.10.10.16 10 CIB 4 YAAX, 27/30 DE ABRIL DE 1136 </p>
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
          <img src={codice09_th} alt="codice-folio-9" />

          <p className="figcaption">Folio actual 9, folio original 17</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.11.4.12  12 EB ZIP, 19/22 DE DICIEMBRE DE 1136 </p>
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
          <img src={codice10_th} alt="codice-folio-10" />

          <p className="figcaption">Folio actual 10, folio original 18</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.11.9.2  11 IK 5 MOL, 19/22 DE MARZO DE 1137 </p>
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
