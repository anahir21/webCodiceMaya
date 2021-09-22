import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Menu } from "../menu/Menu";
import quote from "../../../images/blackquote.png";
import brito01 from "../../../images/brito/brito-article01.jpg";
import brito02 from "../../../images/brito/brito-article02.jpg";    
import pdfBrito from "../../../documents/brito.pdf"



import "./autores.css";


export const Brito = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="view">
            <Menu />

            <div className="cover-article cover-brito"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">Baltazar Brito Guadarrama</p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">
                    El Legado de un AJTZ' <br />
                    IHB El códice maya de <br />
                    México
                </h3>

                <p className="dropcap-article text-gray-article">
                    El 30 de agosto de 2018 resultó una fecha memorable
                    para el estudio del pasado mesoamericano.
                    Ese día, a las diez de la mañana, en una rueda de
                    prensa convocada por el Instituto Nacional de Antropología
                    e Historia (INAH) en las instalaciones del auditorio Fray
                </p>
                <p className="text-gray-article">
                    Pero ¿de dónde salió este importante documento en
                    principio tan desdeñado por una parte de la comunidad
                    académica? y ¿por qué durante todos estos años
                    estuvo envuelto en una fuerte controversia que ponía
                    en duda su originalidad? Para saberlo, es necesario llevar
                    a cabo un breve recuento de su devenir histórico. Pero
                    ¿de dónde salió este importante documento en
                    principio tan desdeñado por una parte de la comunidad
                    académica? y ¿por qué durante todos estos años
                    estuvo envuelto en una fuerte controversia que ponía
                    en duda su originalidad? Para saberlo, es necesario llevar
                    a cabo un breve recuento de su devenir histórico.

                </p>
                <h3 className="subtitle-author"> "Fue nada menos que un milagro" </h3>

                <p className="text-gray-article">
                    Esas fueron las
                    discretas palabras que el mayista Michael D. Coe
                    expresó en abril de 1971 al ser interrogado a través
                    del The New York Times por el descubrimiento del
                    cuarto códice maya que, clasificado como original,
                    se exhibía por primera vez al público dentro del Club
                    Grolier, “la sociedad más grande y antigua de Estados
                    Unidos para bibliófilos y entusiastas de las artes
                    gráficas”18. Más tarde, en 1973, en la publicación titulada
                    The Maya Scribe and His World, Coe decidió escribir
                    sobre el hallazgo de aquel manuscrito mesoamericano.
                    Mencionó que había sido localizado dentro
                    de una cueva, junto a una máscara de mosaico y que,
                    además, lo había sometido a una prueba de Radiocarbono
                    14 con la finalidad de despejar cualquier duda
                    sobre su antigüedad; por último, observó que su contenido
                    estaba relacionado con los ciclos de Venus y
                    que el estilo e iconografía que lo caracterizaba eran
                    producto de una aculturación surgida entre mayas y
                    toltecas durante el Posclásico, manteniendo cierto
                    parecido con la tradición Mixteca-Puebla.
                </p>

                <p className="text-gray-article">


                    Desde un principio las palabras del investigador
                    norteamericano fueron muy escuetas, nunca despejaron
                    las dudas sobre la procedencia del documento
                    y, mucho menos, esclarecieron el nombre del propietario. Su hermetismo era total; sin embargo, ese
                    mismo año Karl E. Mayer, un periodista que trabajaba
                    para The New Yorker, publicó una nota intitulada
                    “A Reporter at Large. The Plundered Past”, donde
                    denunció distintos casos de venta ilegal de obras
                    artísticas y piezas arqueológicas. Entre los informantes
                    secretos que lo habían proveído de noticias
                    había traficantes y comerciantes de dudosa reputación.
                    Uno de ellos le confesó las siguientes palabras:

                </p>
                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            Ese códice [el Grolier] fue encontrado en una
                            caja de madera —lo sé por casualidad, aunque
                            no es mío— y la caja estaba bien cerrada, tan
                            apretada que la humedad no arruinó el papel
                            de la corteza […] El códice fue descubierto en
                            una cueva en Chiapas, y fue parte de un grupo
                            funerario. Espero que se venda por seis cifras y
                            desaparezca de la vista por varios años. Luego
                            volverá a aparecer, con un nombre de coleccionista
                            adjunto. Se encontró con algunos otros
                            objetos de primera clase, incluida la máscara
                            de mosaico de Dumbarton Oaks.


                        </p>
                    </div>
                </blockquote>

                <div className="gallery-items-2">
                    <img src={brito01} alt="Baltazar Brito" />
                    <img src={brito02} alt="Baltazar Brito" />
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
                    glifos mayas.



                </p>

            </article>
            <div className="read-more">
            <a
            href={pdfBrito}
            download="baltazar_brito.pdf"
          >
            Leer más
      </a>
      
      </div>
            <Footer />
        </section>
    );

};



