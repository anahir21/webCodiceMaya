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
                    The Historical Context  <br />
                    of the Maya Codex of  <br /> Mexico

                </h3>

                <p className="dropcap-article text-gray-article">
                    At the year 761 the Lord of Tamarindito led a
                    great rebellion in the Río de la Pasión region
                    against K’awiil Chan K’inich, lord of the royal house
                    of Mutuˀl that ruled over Dos Pilas, destroying the
                    latter city in the Petexbatún basin, in Guatemala.
                    The elites of Cancuén apparently suffered a similar
                    fate shortly after (ca. 800), for the palace dwellers
                    were massacred and thrown into a neighboring cistern.
                    These episodes are just a sample of the convulsions,
                    violence, turbulence, unrest and political
                    instability this region endured during the last four
                    decades of the eighth century and early ninth century.
                    Split sections of Dos Pilas aristocracy settled
                    in different locations of the area (Aguas Calientes,
                    Arroyo de Piedra, Seibal and La Amelia) claiming for
                    themselves the royal title of Mutuˀl, albeit extinction
                    was the destiny awaiting all. It is thought the family’s
                    main branch took refuge in Aguateca and later
                    on Punta Chimino, a peninsula in lake Petexbatún.
                    In either case, the walls and defenses they hurriedly
                    erected were of little use, since death, siege, chaos
                    and fire followed shortly after (on this subject see
                    Vega Villalobos, 2021). Based on archaeological –
                    and to a lesser degree iconographic and epigraphic–
                    data, certain scholars believe the aggressors came from Chontalpa, a zone of prosperous traders that
                    had been growing since the mid-seventh century.
                    The fact is that overpopulation, soil exhaustion and
                    a series of prolonged and recurrent droughts pushed
                    life in the Maya zone in particular, and in Mesoamerica
                    in general, to the brink of extinction. The former
                    citadels, palaces and sumptuous ceremonial centers
                    of the Classic capitals were overrun by hordes
                    of impoverished farmers, who dismantled the buildings
                    and plundered the riches of temples and tombs,
                    leading a rustic and miserable lifestyle, surviving
                    haphazardly, for they were constantly exposed to
                    famine, disease and bloody attacks by the Chontal
                    or other groups struggling to survive. Under such
                    precarious conditions, the quality and quantity
                    of food also declined, infant mortality increased,
                    body height and life expectancy decreased, while
                    conditions such as anemia, osteoporosis, leishmaniasis
                    and stomach infections intensified, along
                    with scurvy and treponema, which doubtlessly presented
                    as epidemics.
                </p>


                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            Constructive vigor in the heart of the Maya world
                            noticeably deteriorated and a series of princelings
                            in Ixlú, Jimbal and Zac Petén proclaimed themselves
                            Lords of Mutuˀl due to the internal feuding and
                            political splintering of the governing house of Tikal.
                        </p>

                    </div>
                </blockquote>



                <p className="text-gray-article">
                    Mayanists believe that by 830 there were no longer
                    any authorities respected and recognized by everyone
                    in Calakmul or Tikal. The last known leader of
                    the Kaanuˀl dynasty who ruled in Calakmul dates
                    from ca. 736 and what transpired after remains
                    unclear, though it seems unquestioned that the Río
                    Bec region enjoyed a fleeting autonomy, respite and prosperity before the crisis ensued, as did the nearby
                    sites of La Muñeca, Nadzcaan and Oxpemul. In
                    the latter city, a man bearing the emblem glyph of a
                    bat –originally from Naachtún– proclaimed himself
                    Lord of Uhxteˀ Tuun (Calakmul) in 830. By 791 Calakmul
                    had lost its authority to such an extent that
                    the governor of its former fervent ally, La Corona,
                    preferred to marry a woman from enemy Tikal that
                    year. By the end of the ninth century a character
                    called Ajtook’ erected the last stela at Calakmul, of
                    a very rough and poor style. Simon Martin believes
                    the remnants of the Motul de San José nobility
                    moved to Tayasal around 849.
                </p>


                <div className="gallery-items-2">
                    <img src={velasquez01} alt="Erik Velásquez García" />
                    <img src={velasquez02} alt="Erik Velásquez García" />
                </div>

                <footpage>
                    Figure 1. Stela 3 at Seibal, Petén, Guatemala.
                    Drawn by Ian Graham (1996: 7.17).Note the presence
                    of the dates 7-SIPAK and 5-SIPAK, canonical heliacal
                    risings of the Morning Star.


                    <br />
                </footpage>


                <footpage>
                    <br />

                    Figure 2. Stela 1 at Jimbal, Petén, Guatemala.
                    Drawn by Christopher Jones and Linton Satterthwaite
                    (1982: fig. 78). Note the presence of the date 12 -KOA,
                    which indicates the canonical heliacal rising of the Morning
                    Star. The king depicted is Jasaw Chan K’awiil, last ruler of the
                    royal house of Mutuˀl, who is celebrating the end
                    of the period AD 879.</footpage>


            </article>
            <div className="read-more">
                <a
                    href={pdfVelasquez}
                    download="velasquez.pdf"
                >
                    See more
                </a>
            </div>

            <Footer />
        </section>
    )

}



