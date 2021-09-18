import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import quote from "../../../images/blackquote.png";
import "./autores.css";
import velasquez01 from "../../../images/velasquez/velasquez01.jpg";
import velasquez02 from "../../../images/velasquez/velasquez02.jpg";
import pdfVelasquez from "../../../documents/velazquez.pdf"

export const Velasquez = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="view">
            <Navbar />

            <div className="cover-article cover-velasquez"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">Erik Velásquez García</p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">

                    El contexto  <br /> histórico
                    del Códice  <br /> Maya de México
                </h3>

                <p className="dropcap-article text-gray-article">
                    En el año 761 el señor de Tamarindito lideró una
                    gran rebelión en la región del Río de la Pasión
                    contra K’awiil Chan K’inich, señor de la casa real de
                    Mutuˀl que gobernaba en Dos Pilas, destruyendo a
                    esta última ciudad de la cuenca del Petexbatún, en
                    Guatemala.
                </p>
                <p className="text-gray-article">
                    Igual destino al parecer vivió la élite de
                    Cancuén un poco más tarde (ca. 800), pues la gente
                    de su palacio fue masacrada y arrojada en una cisterna
                    contigua. Estos episodios son solamente una muestra
                    de la convulsión, violencia, turbulencia, desorden e
                    inestabilidad política que se vivió en esa región durante
                    las últimas cuatro décadas del siglo VIII y las
                    primeras del IX. Fragmentos escindidos de la nobleza
                    de Dos Pilas se instalaron en diferentes lugares de la
                    zona (Aguas Calientes, Arroyo de Piedra, Ceibal y La
                    Amelia), reclamando para sí el título real de Mutuˀl,
                    mas el destino de todos fue la extinción. Se cree que
                    la rama principal de la familia se refugió en Aguateca
                    y después en la península de Punta Chimino, en el lago
                    Petexbatún. En ambos casos de poco le valieron las
                    apresuradas murallas y defensas que edificaron, pues
                    la muerte, el asedio, el caos y el incendio no tardaron
                    en llegar (sobre este tema ver Vega Villalobos, 2021).
                    Basados en datos arqueológicos —y en menor medida
                    iconográficos y epigráficos—algunos estudiosos piensan que los agresores procedían de la Chontalpa,
                    zona de prósperos comerciantes que desde mediados
                    del siglo VII venía en ascenso. Pero lo cierto es
                    que la sobrepoblación, el desgaste de las tierras y una
                    serie de sequías prolongadas y recurrentes llevaron la
                    vida en la zona maya en particular, y en Mesoamérica
                    en general, al límite de la sobrevivencia. Los otrora
                    acrópolis, palacios y suntuosos centros ceremoniales
                    de las capitales clásicas fueron ocupados por hordas
                    de agricultores empobrecidos, quienes se instalaron
                    desmantelando los edificios y saqueando las riquezas
                    de los templos y tumbas, llevaron un estilo de vida
                    rústico y miserable, sobreviviendo a salto de mata,
                    pues en todo momento estaban expuestos a la hambruna,
                    a las enfermedades y a ataques sangrientos
                    de los chontales o de otros grupos que luchaban por
                    subsistir. Con ese tipo de condiciones tan precarias,
                    la calidad y cantidad de su alimentación también se
                    minó, aumentando la mortandad infantil, disminuyendo
                    la talla corporal y la esperanza de vida, al tiempo
                    que se recrudecieron padecimientos como la anemia,
                    la osteoporosis, la leishmaniasis y las infecciones estomacales,
                    a las que se sumaron el escorbuto y el treponema,
                    que seguro se manifestaron en epidemias.

                </p>

                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            En el corazón del mundo maya el vigor constructivo
                            se minó sensiblemente y una serie de reyezuelos en
                            Ixlú, Jimbal y Zac Petén se proclamaron señores de
                            Mutuˀl, debido a las batallas intestinas y fragmentación
                            política de la casa gobernante de Tikal.
                        </p>

                    </div>
                </blockquote>



                <p className="text-gray-article">
                    Los mayistas
                    creen que para 830 ya no había autoridades
                    respetables ni reconocidas por todos en Calakmul ni
                    en Tikal. El último mandatario conocido de la dinastía
                    Kaanuˀl que gobernó en Calakmul data de ca. 736 y lo que sucedió después no queda claro, aunque parece
                    fuera de duda que la región de Río Bec gozó de
                    una efímera autonomía, respiro y prosperidad antes
                    de presentarse la crisis, lo mismo que los aledaños
                    sitios de La Muñeca, Nadzcaan y Oxpemul. En esta
                    última ciudad un señor que llevaba el glifo emblema
                    de Murciélago –originario de Naachtún–, se proclamaba
                    señor de Uhxteˀ Tuun (Calakmul) en 830. Para
                    791 Calakmul había perdido tanta autoridad, que el
                    gobernante de su antiguo y ferviente aliado, La Corona,
                    prefirió casarse en ese año con una mujer del
                    enemigo Tikal. Al término del siglo IX un personaje llamado
                    Ajtook’ erigió las últimas estelas de Calakmul,
                    de estilo muy burdo y pobre. Simon Martin piensa que
                    hacia 849 los restos de la nobleza de Motul de San
                    José se mudaron a Tayasal.
                </p>


                <div className="gallery-items-2">
                    <img src={velasquez01} alt="Erik Velásquez García" />
                    <img src={velasquez02} alt="Erik Velásquez García" />
                </div>

                <footpage>
                    Figura 1. Estela 3 de Ceibal, Petén, Guatemala.
                    Dibujo de Ian Graham (1996: 7.17). Notar la presencia
                    de las fechas 7- SIPAK y 5 -SIPAK, ortos heliacales
                    canónicos de la Estrella Matutina.
                    <br />
                </footpage>


                <footpage>
                    <br />
                    Figura 2. Estela 1 de Jimbal, Petén, Guatemala.
                    Dibujo de Christopher Jones y Linton Satterthwaite
                    (1982: fig. 78). Notar la presencia de la fecha 12 -KOA,
                    que indica el orto heliacal canónico de la Estrella Matutina.
                    El gobernante retratado es Jasaw Chan K’awiil, último
                    mandatario de la casa real de Mutuˀl, quien se encuentra
                    celebrando el final de periodo de 879 d.C.</footpage>


            </article>
            <div className="read-more">
            <a
            href={pdfVelasquez}
            download="velasquez.pdf"
          >
            Leer más
      </a>
      </div>
           
            <Footer />
        </section>
    )

}



