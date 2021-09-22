import React, { useEffect } from "react";
import { Footer } from "../footer/Footer";
import { Menu } from "../navbar/Menu";
import "./codice.css";
import tabla from "../../../images/codice/tabla.png";
import orbitas from "../../../images/codice/orbitas.png";
import tarjeta3 from "../../../images/codice/tarjeta3.png";
import tarjeta6 from "../../../images/codice/tarjeta6.png";
import tarjeta7 from "../../../images/codice/tarjeta7.png";
import tarjeta4 from "../../../images/codice/tarjeta4.jpg";

export const Codice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="view">
      <Menu />

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

        <h6 className="subtitle-article">Estructura de cada página</h6>
        <p className="text-gray-article">
          Cada página tiene misma estructura. Se divide en cuatro partes. 1)
          Columna jeroglífica de día. La columna del jeroglifo de los días del
          almanaque adivinatorio representa las fechas iniciales de la fase de
          Venus con su augurio presentada en la página. Son 13 veces repetidas
          el mismo jeroglifo pero acompañado por distinto coeficiente numérico.
          El coeficiente es pintado de color rojo y se lee un punto como uno y
          una barra como cinco. El mínimo es el uno y el máximo es el trece. El
          almanaque de 260 días consiste en la combinación de un número de 1 a
          13 con uno de veinte jeroglifos o nombres de días. Esta combinación
          funciona como el día del calendario tanto del adivinatorio como del
          año solar.
        </p>
        <div className="full-image">
          <img src={tarjeta7} alt="table" />
          <img src={tarjeta4} alt="table" />
        </div>

        <p className="text-gray-article">
          2) Número de distancia. Un anillo o bulto en color rojo amarrado con
          un nudo es un jeroglifo de la palabra tzol y significa “colocar en
          orden”. Representa el número de distancia o también se conoce como el
          número de anillo que significa los días que duran la fase. El valor
          del signo numérico es diferente si está adentro del anillo o afuera.
          Adentro un punto tiene valor de uno y una barra, de cinco, ambos en
          color negro, mientras que afuera sólo hay puntos en rojo y cada uno
          vale veinte. Si hay un punto y tres barras negros adentro del anillo y
          once puntos rojos afuera, la suma es de 236 días: 1 + (5 x 3) + (20 x
          11). Son cuatro cifras dependiendo de la posición de Venus: la 90, (5
          x 2) + (20 x 4), es cuando Venus es invisible, porque está detrás del
          Sol (Conjunción Superior) (páginas 1, 5 y 9), la 250, (5 x 2) + (20 x
          12), es visible como la Estrella de la Tarde (páginas 2, 6 y 10), la
          8, 3 + 5, es invisible por estar entre la Tierra y el Sol (Conjunción
          Inferior) (páginas 3 y 7) y la 236 es visible como la Estrella de la
          Mañana (páginas 4 y 8). La duración de cada fase no coincide con los
          cálculos astronómicos reales, sino son cifras manipuladas en relación
          con tanto los días del almanaque adivinatorio como múltiplos de
          lunaciones porque el propósito final de la tabla de Venus es
          pronosticar eclipses para hacer rituales específicos. 3) Deidad. Una
          deidad personificada a Venus agrede a una víctima. Son dioses con
          características negativas como de la guerra, de la muerte o del
          inframundo porque los mayas creían que el tiempo en el que Venus era
          invisible andaba en el inframundo y cuando aparecía, venía cargado de
          desgracias, enfermedad y muerte. Además le culpaban de ocasionar los
          eclipses, pues pensaban que el agresivo astro mordía el Sol o la Luna.
          Por la característica del periodo probable de su elaboración, el
          Posclásico temprano (900-1200 d. C.), el Códice Maya de México es un
          códice híbrido de estilo del centro de México y maya los dioses pueden
          llevar elementos de ambas tradiciones cultural y artística. 4)
          Víctima. Una figura antropomorfa, arquitectónica o de nateraleza
          afectada por la acción negativa de Venus.
        </p>
        <p className="text-gray-article">
          Nota: Existen varias formas de escribir los nombres de los días del
          almanaque adivinatorio de 260 días. Aquí utilizamos la ortografía
          moderna en maya yucateco.
        </p>
      </article>

      <Footer />
    </section>
  );
};
