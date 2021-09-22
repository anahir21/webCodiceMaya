import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Menu } from "../navbar/Menu";
import quote from "../../../images/blackquote.png";
import "./autores.css";
 import pdfCarlson from "../../../documents/carlson.pdf"
import codicecarlson from "../../../images/carlson/codice-carlson.jpg"

export const Carlson = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="view">
            <Menu />

            <div className="cover-article cover-carlson"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">John B. Carlson</p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">
                    Las veinte máscaras de Venus:
                    una <br />
                    perspectiva 20/20 del Códice
                    Maya <br /> de México, antes Grolier.
                    El más antiguo  libro en papel<br />
                    de América que se conserva

                </h3>

                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            [E]stos sacerdotes y Ah kines [Ahk’in], que es en su lengua,
                            tenían ellos en mucho, y estos Ah Kines tenían libros de figuras
                            por donde se regían, y allí tenían señalados los tiempos en
                            que habían de sembrar y coger e ir a caza y a la guerra, y se
                            entendían unos sacerdotes con otros y se escribían por figuras
                            y sabían lo que había sucedido muchos años atrás.
                        </p>
                        <p className="quote-author">— Giraldo Díaz de Alpuche, 1579</p>
                    </div>
                </blockquote>




                <p className="dropcap-article text-gray-article">
                    Entre los logros verdaderamente notables de las antiguas
                    culturas de Mesoamérica están la creación de la escritura y
                    las tradiciones de fabricar papel para múltiples usos y escribir
                    en libros (Lenz 1948; Seemann Conzatti 1990).
                    Podemos estar bastante seguros de que tanto la escritura.
                </p>
                <p className="text-gray-article">Al momento de la Conquista española en el siglo
                    XVI, en Mesoamérica había múltiples libros plegados
                    como biombo confeccionados con pieles de animales
                    (generalmente de venado) así como con papel de
                    corteza, con una capa de fino gesso blanco y pintado
                    caligráficamente a pincel. Estos libros plegados
                    se conocen como “códices”, a diferencia de otros
                    documentos con escritura registrada en madera,
                    piedra, concha y cerámica. Sabemos que dichos códices
                    incluían genealogías, listas de reyes, registros de
                    tributos y almanaques astronómicos, calendáricos y
                    rituales para la adivinación y profecía. Existían también
                    diversas formas de mapas y documentos territoriales,
                    pero los cerca de 16 códices que se conservan
                    son de naturaleza sobre todo genealógica-histórica o
                    ritual-calendárica. De éstos, sólo cuatro provienen de
                    la cultura maya. Los Códices Dresde, París y Madrid
                    —nombrados por la ciudad en la que se encuentran
                    en nuestros días— probablemente llegaron a Europa
                    en el siglo XVI y después se perdieron para el mundo
                    académico, sólo para ser redescubiertos en el siglo
                    XIX y reconocidos por lo que son —libros plegados
                    precolombinos de adivinación conteniendo almanaques
                    rituales con datos calendáricos, astronómicos
                    y otra información sagrada—. El cuarto libro maya,
                    más frecuentemente llamado el Códice Grolier —el único descubierto en el siglo XX, presuntamente por
                    saqueadores en una cueva seca en México— ha sido
                    tema de gran controversia desde su presentación al
                    mundo en 1971 en la ciudad de Nueva York. Si bien
                    muchos mayistas han aceptado el Códice Grolier
                    como un genuino artefacto antiguo, aún queda duda
                    en la mente de algunos, sobre todo en México. A continuación
                    presento un breve recuento de esta historia
                    desde una perspectiva personal, así como un resumen
                    de mi trabajo de investigación, arguyendo que
                    el Códice es en efecto un almanaque de adivinación
                    maya de estilo híbrido de hace mil años. En tal caso,
                    es el libro en papel más antiguo de América que se
                    conserva.
                </p>

                

                <div className="full-image">
          <img src={codicecarlson} alt="Códice John B. Carlson" />
     </div>

                
                
                
                <p className="text-gray-article">

                    El Dr. Sáenz mandó fotografiar en blanco y negro
                    este “Códice Sáenz”, en algún momento entre 1965
                    y 1968. El eminente mayista de Yale Michael D. Coe
                    [1929-2019] (1992:227-229, 2006:198) vio estas fotos
                    por primera vez cuando visitó la casa de Sáenz en
                    la Ciudad de México en 1968 y sostuvo el Códice en
                    sus manos. Coe narra que se convenció de inmediato
                    de que lo que estaba viendo era un genuino artefacto
                    antiguo precolombino. Sáenz le dio una serie de fotos
                    en blanco y negro y Coe se las llevó de vuelta a New
                    Haven y la mostró a su colega de Yale, Floyd Lounsbury.
                    “Tras considerable estudio, ambos concluimos
                    que éste era el cuarto manuscrito maya conocido”
                    (Coe, 2006, p. 198).

                </p>





                <div className="full-image">

                </div>



                <p className="text-gray-article">
                    Aunque algo dejaban entrever estas declaraciones,
                    durante mucho tiempo no se supo a ciencia cierta
                    quién era el misterioso dueño del documento; no
                    obstante, existía una fuerte sospecha sobre Sáenz
                    por haber estado involucrado en la venta de la máscara
                    de Dumbarton Oaks. Casi tres décadas después,
                    en 1992, Coe rompió el silencio; decidió extender su
                    declaración original y, en su libro El desciframiento de los
                    glifos mayas



                </p>

            </article>
            <div className="read-more">
            <a
            href={pdfCarlson}
            download="carlson.pdf"
          >
            Leer más
      </a>
      
            </div>
            <Footer />
        </section>
    )

}



