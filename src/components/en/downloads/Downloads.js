import React, { useEffect } from "react";
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

export const Downloads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" view downloads">
      <Navbar />
      <h1 className="section_titles text-left">Downloads</h1>
      <div className="grid-pages">
        <div className="folio-card">
          <img src={codice01_th} alt="codice-folio-1" />

          <p className="figcaption">Current folio 1, original folio 9</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.0.4 1 KAN 7 CAMKU, OCTOBER 8/11, 1133 </p>
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

          <p className="figcaption">Current folio 2, original folio 10</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.4.14 13 HIX 12 ZODZ, 6/9 JANUARY 1134</p>
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

          <p className="figcaption">Current folio 3, original folio 11</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.17.4 3 kan 2 kayab, September 13/16, 1134</p>
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

          <p className="figcaption">Current folio 4 original folio 12</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.8.17.12 11 eb 10 kayab, 21/24 september 1134 </p>
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

          <p className="figcaption">Current folio 5 original folio 13</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.9.11.18 13 lamat 1 zac, May 15/18, 1135 </p>
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

          <p className="figcaption">Current folio 6 original folio 14</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.9.15.18 12 edznab 11 muan, August 13/16, 1135</p>
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

          <p className="figcaption">Current folio 7 original folio 15</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.10.10.8 2 lamat 16 cheen, April 19/22 1136 </p>
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

          <p className="figcaption">Current folio 8 original folio 16</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.10.10.16 10 ibc 4 yaax, 27/30 April 1136</p>
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

          <p className="figcaption">Current folio 9 original folio 17</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.11.4.12 12 eb zip, December 19/22 1136</p>
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

          <p className="figcaption">Current folio 10 original folio 18</p>
          <div className="date">
            <div>
              <hr className="line-date" />
            </div>

            <p>10.15.11.9.2 11 ik 5 mol, March 19/22, 1137 </p>
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
        <p>
          Attribution/NonCommercial-NoCommercial-ShareAlike 4.0 International
        </p>
      </div>

      <Footer />
    </section>
  );
};
