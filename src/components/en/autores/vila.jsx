import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import quote from "../../../images/blackquote.png";
import vila01 from "../../../images/vila/vila_01.jpg";
import pdfVila from "../../../documents/vila.pdf";
import "./autores.css";

export const Vila = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="view">
            <Navbar />

            <div className="cover-article cover-vila"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">Ricardo F. Vila Freyer</p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">

                    Cero, matemáticas  <br />
                    y los mayas
                </h3>

                <p className="dropcap-article text-gray-article">
                    La etimología de matemática es “lo relativo al conocimiento”,
                    es por eso que la cultura contemporánea
                    le da tanta importancia a esta ciencia y, sobre todo,
                    valora su aplicación en cualquier otra disciplina científica. Sobra decir que esta idea, la etimología de la palabra
                    matemática, va mucho más allá de simplemente
                    contar o de lo relativo a números. Las matemáticas
                    ayudan a establecer modelos sistemáticos
                    sobre lo que conocemos para poder predecir lo que
                    se espera: la evolución de una bacteria, la evolución
                    del clima, la robustez de un puente, etcétera.

                </p>
                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            Entre los primeros conocimientos de la humanidad
                            de los que hay registro está el arte de contar.
                        </p>

                    </div>
                </blockquote>

                <p className="text-gray-article">
                    Se han
                    encontrado huesos en cuevas que fueron habitadas
                    hace miles de años que han fungido como evidencia
                    de que los hombres antiguos contaban, pues en
                    estos huesos marcaban cantidades, posiblemente
                    de objetos de caza, o animales. La evolución del
                    sistema numérico es muy impresionante porque el
                    conocimiento que hoy es muy natural para todos los
                    humanos no apareció en la historia de la matemática
                    de la misma forma sino hasta mucho tiempo después.
                    El concepto de cero forma parte de ese conocimiento
                    más reciente, al igual que los sistemas de numeración.
                    Empecemos diciendo que pocas culturas en la humanidad
                    han desarrollado su propio sistema de numeración.
                    Por ejemplo, tanto los romanos como los
                    griegos, hebreos y otros, representaban los números
                    utilizando el alfabeto. Y aunque usaran claves para ir
                    clasificando o denotando los números grandes, este
                    sistema fue enormemente complicado como para
                    desarrollar una aritmética útil. Aún hoy, debido al
                    tiempo que duró su uso, utilizamos en ocasiones la
                    numeración romana, como por ejemplo, al referirnos
                    a nuestro siglo: el XXI, o a la clasificación de un
                    monarca por su nombre: Felipe II, Calos V. Pero hay
                    que ponerse a imaginar si solo conociéramos este
                    sistema de numeración, cómo podríamos desarrollar
                    algoritmos sencillos para hacer sumas como IX + VII,
                    MDI + XCVI; y ya no digamos para multiplicaciones.
                    No podemos dejar de pensar que nuestros antepasados
                    que practicaban el comercio debían hacer sumas
                    con frecuencia y, en un sistema como el romano, eso
                    seguramente resultaba demasiado engorroso.

                </p>


                <p className="text-gray-article">
                    Para simplificar el sistema de numeración, la humanidad
                    o las diversas civilizaciones que han transitado en
                    nuestra historia tuvieron que desarrollar otros. Nosotros,
                    los humanos del siglo XXI, utilizamos el sistema
                    decimal con los números arábigos, que explicaremos
                    brevemente a continuación porque ello nos servirá
                    para poder describir otros más.
                </p>

                <p className="text-gray-article">

                    El cero podría ser el símbolo que representa la ausencia
                    de cantidad en la notación posicional, o bien, el
                    número que representa la cantidad nula. Para nosotros
                    hoy día es obvio que es la cantidad nula, pero esto
                    es consecuencia de miles de años de evolución de
                    nuestro entendimiento de la matemática. No fue
                    tan obvio para las culturas que intentaron desarrollar
                    estos conceptos.

                </p>

                <div className="full-image">
                    <img src={vila01} alt="Ricardo F. Vila Freyer" />

                </div>

                <p className="text-gray-article">
                    Debemos mencionar que en el sistema maya los
                    números también admiten otros tipos de representaciones,
                    igual que el mismo cero. Pensemos que nosotros
                    actualmente podemos representar el número
                    con palabras, como sucede en documentos legales,
                    y con cifras. Algo análogo sucedía con los mayas que
                    tienen glifos asociados simultáneamente a números
                    y a dioses, digamos, la representación “caligráfica” de
                    los números, además de la representación por cifras
                    con el sistema mencionado arriba.
                    
                   
                    <br />
                    Como podemos ver, en todas las páginas de nuestro
                    Códice Maya de México aparecen representados números.
                    Además, en sus estelas y relieves los mayas
                    fueron siempre cuidadosos en fechar sus grandes
                    enunciados políticos y religiosos. En cada estela
                    donde se describe algún suceso especial del sagrado
                    gobernante o algún suceso religioso, se grababa la
                    fecha en su propio sistema de notación. Este es otro
                    de los grandes logros de la cultura maya. No solo el
                    desarrollo o descubrimiento autónomo del cero y
                    de un sistema de numeración tan eficiente como el
                    nuestro, sino también su sistema calendárico. Ya no
                    digamos de su sistema de escritura.
                </p>


                <p className="text-gray-article">
                Se conocen al menos seis glifos para el cero, por
                    ejemplo. Y estas representaciones podrían haber
                    variado entre las distintas ciudades y las distintas
                    épocas en el devenir histórico de la cultura maya.
                   
                </p>


                <p className="text-gray-article">
                    
                    Como podemos ver, en todas las páginas de nuestro
                    Códice Maya de México aparecen representados números.
                    Además, en sus estelas y relieves los mayas
                    fueron siempre cuidadosos en fechar sus grandes
                    enunciados políticos y religiosos. En cada estela
                    donde se describe algún suceso especial del sagrado
                    gobernante o algún suceso religioso, se grababa la
                    fecha en su propio sistema de notación. Este es otro
                    de los grandes logros de la cultura maya. No solo el
                    desarrollo o descubrimiento autónomo del cero y
                    de un sistema de numeración tan eficiente como el
                    nuestro, sino también su sistema calendárico. Ya no
                    digamos de su sistema de escritura.
                </p>



            </article>
            <div className="read-more">
            <a
            href={pdfVila}
            download="Vila.pdf"
          >
            Leer más
      </a>
      </div>
        
            <Footer />
        </section>
    )

}



