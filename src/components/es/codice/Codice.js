import React from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import "./codice.css";
import tabla from "../../../images/codice/tabla.png";
import orbitas from "../../../images/codice/orbitas.png";
import tarjeta3 from "../../../images/codice/tarjeta3.png";
import tarjeta6 from "../../../images/codice/tarjeta6.png";

export const Codice = () => {
  return (
    <section className="view">
      <Navbar />

      <div className="cover-article"></div>
      <article className="text-article">
        <div className="author-section">
          <p className="author-name">Saeko Yanagisawa</p>
          <div>
            <hr />
          </div>
        </div>

        <h3 className="title-article">
          Estudio iconográfico <br />
          Códice Maya de México
        </h3>

        <p className="dropcap-article text-gray-article">
          La actual forma del Códice Maya de México de diez páginas, no es su
          forma original, sino es una parte de un documento más largo. La tabla
          conocida como la “Tabla de Venus” o el “Gran Ciclo de Venus”, se sabe
          que le faltan ocho páginas antes y dos después (ver esquema).
        </p>
        <div className="full-image">
          <img src={tabla} alt="table" />
        </div>

        <p className="text-gray-article">
          El Gran Ciclo del planeta Venus es una tabla combinada de tres ciclos
          importantes en Mesoamérica: el periodo sinódico venusino de 584 días,
          el calendario del año solar o vago de 365 días y el almanaque
          adivinatorio de 260 días. La combinación de estos tres da como
          resultado 37,960 días con el cual los antiguos mayas intentaban
          pronosticar los eclipses tanto lunar como solar, ya que relacionaban
          el movimiento de Venus con esos fenómenos.
        </p>

        <div className="call-to-action">
          <div className="image-action"></div>
          <div className="content-action">
            <h4>Iconografía</h4>
            <p>
              Luckily offered article led lasting country minutes nor old.
              Happen people things oh is oppose up parish effect. Law handsome
              old outweigh humoured far appetite.
            </p>
            <button>ESTUDIO ICONOGRÁFICO</button>
          </div>
        </div>

        <p className="text-gray-article">
          Tanto en el Códice Maya de México como el de Dresde, el ciclo sinódico
          de Venus se divide en cuatro fases aparentes vistas desde la Tierra.
          El Gran Ciclo de Venus del Códice Maya de México en forma original
          constaría de cinco veces repetidas de estas cuatro fases, una por
          foja, a lo largo de veinte páginas. En cada una se encuentra un
          jeroglifo de día del almanaque adivinatorio trece veces repetidas
          verticalmente con diferente coeficiente numérico. Esto quiere decir
          que los cinco ciclos sinódicos de Venus deben multiplicarse por trece.
          La cifra que da es de 37,960 días y equivale a la suma de cinco ciclos
          sinódicos de Venus (5 x 584 días) o la de ocho años vagos (8 x 365
          días) multiplicada por trece, ésta a la vez coincide con dos ciclos
          del calendario mesoamericano que combina el de 365 días y de 260 días
          (2 x 18,980 días, o bien 2 x 52 años) o, lo que es lo mismo, 65 ciclos
          sinódicos de Venus de 584 días cada uno (65 x 584 = 37, 960 días).
        </p>

        <div className="full-image">
          <img src={orbitas} alt="table" />
        </div>

        <h6 className="subtitle-article">Forma de lectura</h6>
        <p className="text-gray-article">
          La lectura inicia en el último jeroglífico en la columna de la última
          página (la página XX, hoy perdida), que, junto con su coeficiente
          numérico, es 1 Ajaw y corresponde a la primera salida de la estrella
          matutina. Continúa 236 días más tarde en el primer jeroglifo con su
          coeficiente de la columna de días del almanaque adivinatorio en la
          primera página viendo desde nuestra mano izquierda. Después pasa al
          primer jeroglifo de la segunda página y luego sigue al primero de la
          tercera, así va pasando hasta la última página. Después de ella,
          regresa a la primera pero ahora con el segundo signo de la columna
          jeroglífica. Así va pasando de izquierda a derecha de arriba a abajo
          hasta el último jeroglifo en la última página como si el códice fuera
          un gran tornillo (ver esquema). El último punto del tornillo es el día
          1 Ajaw, fecha venusina por excelencia entre los mayas y la base de
          toda la construcción de la tabla de Venus, que se encontraría en la
          vigésima página que lamentablemente ahora está perdida. Hay que decir
          que 1 Ajaw es, por lo tanto, el día de arranque como de conclusión de
          toda la estructura de 37,960 días (104 años de 365 días cada uno o 65
          ciclos de Venus). 1 Ajaw es el alfa y el omega de toda la
          construcción.
        </p>

        <div className="full-image">
          <img src={tarjeta3} alt="table" />
          <img src={tarjeta6} alt="table" />
        </div>

      </article>

      <Footer />
    </section>
  );
};
