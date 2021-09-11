import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import quote from "../../../images/blackquote.png";
import { ButtonMore } from '../ui/ButtonMore';
import "./autores.css";

export const Orozco = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="view">
            <Navbar />

            <div className="cover-article cover-orozco"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">
                        Esther Orozco Orozco

                    </p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">
                    El legado maya es de amor
                    al conocimiento<br />

                </h3>

                <p className="dropcap-article text-gray-article">
                    Cuando era niña y adolescente, en la madrugada
                    solía observar el firmamento desde el patio de
                    mi casa, en Pascual Orozco (un pueblito de 2000
                    habitantes, al pie de la Sierra Tarahumara). Sentada
                    en el quicio de la puerta, localizaba los astros más
                    brillantes y les ponía nombre. Seguía Seguía su viaje incesante
                    por el infinito. Si me agobiaban las inquietudes
                    propias de la edad, los buscaba, les hablaba por su
                    nombre y les pedía consejo. No sabía que, una niña de
                    pueblo, ignorante de todo, repetía una acción común
                    a los seres humanos: mirar extasiados el cosmos. Los
                    astros han sido bautizados muchas veces en distintos
                    idiomas y desde distintos rincones del planeta; se
                    les teme, se les canta, se les suplica y se les interroga.
                    La intrigante belleza del universo ha acompañado a
                    nuestra especie desde que existe, y la reta a cantarle
                    y explorarla; de allí nacieron el arte y la ciencia. La
                    curiosidad y la necesidad son sus madres. Primero,
                    parieron a las religiones y la magia, y luego, hombres
                    y mujeres sabias buscaron las causas de los fenómenos
                    que los amenazaban o beneficiaban.
                </p>
                <p className="text-gray-article">

                    Aunque la magia y las religiones luchan por permanecer,
                    ya no es su tiempo, la ciencia les va ganando
                    terreno, aunque su influencia en las esperanzas de los
                    humanos permanecerá mientras no adoptemos una
                    mentalidad científica.
                    Observar es el primer paso en la generación del conocimiento
                    y un acto de supervivencia. Explorar el
                    entorno permite encontrar alimentos y protegernos
                    de los enemigos y de los eventos naturales. Nos conduce
                    a interrogarnos y encontrar los porqués de su
                    acaecer. En forma oral, gráfica, o por medio del lenguaje
                    sistematizado, trasmitimos a nuestros hijos lo
                    que aprendemos para que lo acrecienten y se protejan
                    mejor. Así lo hicieron los tatarabuelos nuestros
                    que surgieron en el África meridional hace más de
                    200,000 años, y empezaron su peregrinaje por el planeta
                    hace 50,000. Arribaron a Europa, Asia y Oceanía,
                    y llegaron al Continente Americano entre 15,000
                    y 30,000 años (dato controversial). Después de su
                    travesía por la Tierra, y con el conocimiento acumulado,
                    milenios después, los ambiciosos humanos buscamos
                    la conquista del cosmos que nos atrae como
                    el flautista de Hamelin a los niños del pueblo. Así, hemos
                    llegado a Marte y logramos la hazaña de recibir
                    en estos días, imágenes fascinantes de su superficie.
</p>            
<p className="text-gray-article">

                    Desde antes de la era cristiana, las viejas culturas
                    mesoamericanas, entre ellas los pueblos mayas, que
                    permanecen, habitaron los espacios que hoy vivimos.
                    Solemos olvidar la vastedad de sus conocimientos,
                    pero sus hallazgos son universales, y los mexicanos
                    somos los afortunados herederos de ellos. Este legado
                    nos empuja a rescatar sus saberes, comparables a los de las culturas europeas y asiáticas de la época.
                    El Códice Maya de México (1154) que aquí se presenta,
                    junto con el análisis hecho por distinguidos científicos
                    de distintas áreas del saber, muestran al mundo
                    la pulcritud del trabajo que la ciencia (sin ser lo que
                    hoy es) y la magia del cosmos y la selva, inspiraron
                    a los mayas.

                </p>

                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            Un lucero del alba, bello y temible, transita por el cielo
                            mesoamericano cargado de presagios
                        </p>

                    </div>
                </blockquote>



                <p className="text-gray-article">
                    ¿Qué tenía
                    que ver esa ruta brillante con el clima, las estaciones
                    del año, las cosechas y los embates de la Naturaleza
                    que asolaban a los mayas? Observaron al lucero,
                    correlacionaron su apariencia con los eventos en su
                    entorno, se sorprendieron con su repetición recurrente
                    en el tiempo y el espacio, anotaron y revisaron sus
                    observaciones. ¡Siguieron los pasos de la investigación
                    científica actual! Observar, preguntarse, anotar,
                    analizar y corregir. Como previsión y homenaje a
                    Venus, trazaron su camino. Conocerlo, les ayudaría
                    a evitar, mediante sacrificios y ritos, las consecuencias
                    de sus movimientos: enfermedades, sequías y
                    desastres. Pintaron los rostros del planeta con las fechas
                    exactas en que aparecía. Cuando no lo miraban,
                    suponían que estaba en el inframundo. Sus hallazgos
                    y conclusiones, mezclados con la magia y la religión,
                    hijas de la ignorancia sobre algunos fenómenos, nos
                    sorprenden 2000 años después.
                </p>
                <p className="text-gray-article">
                    Los mayas sabían fabricar su papel, sus colores y
                    pinceles, y usarlos con minuciosidad y maestría para
                    buscar el conocimiento. Representaban la nada como
                    muy pocos pueblos de la Tierra supieron hacerlo, inventando
                    su propio cero y aprendiendo a colocarlo adecuadamente en su matemática vigesimal. Otras
                    culturas también inventaron el cero, pero la distancia
                    y las comunicaciones de aquel tiempo evitaban la socialización
                    de los conocimientos. Se dice que el cero
                    se originó en Camboya entre los siglos III y IV, pero los
                    mayas no lo sabían. Estudiaron la Vía Láctea, dejaron
                    construcciones que maravillan al mundo. Escribanos,
                    pintores, matemáticos y astrónomos de otros pueblos
                    se reunían para debatir y lograr mayor precisión
                    en el registro de los datos. Es decir, realizaban lo que
                    hoy les llamamos congresos científicos. Sabían que
                    un descubrimiento repercute en las generaciones
                    venideras, que es un escalón para descubrir otros
                    secretos de la Naturaleza y aplicarlos para el bienestar
                    social (ojalá). Desde el saber maya y el saber de
                    otros sobre Astronomía, Matemáticas, Geometría y
                    más, el ser humano llegó a la Luna. El conocimiento
                    que se produjo para lograr esta hazaña permitió generar
                    las sorprendentes comunicaciones de hoy, que
                    nos permiten estar en contacto con personas que se
                    encuentran a miles de kilómetros de distancia.
                </p>
                <p className="text-gray-article">
                    El uso de la herbolaria por los mayas, sumado con muchos
                    más conocimientos sobre los seres vivos que se
                    ha acumulado desde su época de oro, ha permitido
                    encontrar los caminos para derrotar a microorganismos
                    patógenos como los virus, las bacterias y los
                    protozoarios que quebrantan la salud humana. Hoy,
                    tenemos enfrente al SARS- CoV-2 causando millones
                    de muertes en el mundo, mientras la humanidad avanza,
                    al principio a ciegas, y luego alumbrada por los
                    hallazgos científicos que nos han llevado a producir
                    vacunas y medicamentos en varias partes del mundo,
                    trabajamos para derrotarlo. Los mexicanos estamos también en esa batalla por la salud y la vida, buscando
                    una vacuna mexicana. Necesitamos tener presente el
                    legado maya para convertirnos en gigantes actuales de
                    la ciencia y tecnología, que nos permita hacerle frente
                    a este y otras amenazas con las mejores herramientas.
                </p>
                <p className="text-gray-article">
                    Finalmente, saludo la edición facsimilar de los Códices
                    De la Cruz Badiano y Maya de México que ha respaldado
                    la Secretaría de Relaciones Exteriores, la Secretaría
                    de Cultura del gobierno de México, el Instituto
                    Nacional de Antropología e Historia y la Biblioteca
                    Nacional de Antropología e Historia. Invito a todos y
                    todas a la fascinante aventura de conocerlos.
                </p>


            </article>
            
            <div className="more-container-article">
        <ButtonMore />
      </div>
            <Footer />
        </section>
    )

}



