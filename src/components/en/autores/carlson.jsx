import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
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
            <Navbar />

            <div className="cover-article cover-carlson"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">John B. Carlson</p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">
                    The twenty masks of venus: a 20/20  <br />
                    perspective
                    on El Códice Maya  <br />
                    de méxico, antes Grolier – the oldest  <br />
                    surviving book on paper from ancient  <br />
                    America


                </h3>

                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote"> These priests ... had books of figures [figures or drawings]
                            by which they governed themselves, and there they had
                            marked the times when they had to sow and harvest and
                            to go hunting and go to war. And priests corresponded
                            with one another and wrote to one another by figures and
                            knew what had happened many years before.
                        </p>
                        <p className="quote-author">— Giraldo Díaz de Alpuche, 1579</p>
                    </div>
                </blockquote>




                <p className="dropcap-article text-gray-article">
                    Among the truly outstanding achievements of the
                    ancient cultures of Mesoamerica were the creation
                    of writing and the traditions of papermaking for
                    many uses and writing in books (Lenz 1948; Seemann
                    Conzatti 1990). We may be reasonably certain
                    that both writing and papermaking are deep cultural
                    traditions whose roots extend back at least to
                    the Middle Formative period (ca. 900-400 BCE) and
                    perhaps even earlier. Calendrical and other simple inscriptions have survived on other media such as
                    ceramics and carved stone from the “Olmec” Gulf
                    Coast to the Zapotec Highlands of Oaxaca and the
                    Maya Lowlands. Characteristic stone beaters for
                    the manufacture of bark paper have also been excavated
                    dating from this period.
                </p>
                <p className="text-gray-article">At the time of the Spanish conquest in the early
                    sixteenth century, screenfold books of animal hide
                    (usually deerskin) as well as bark paper, coated with
                    a fine white plaster gesso and painted calligraphically
                    by brush, existed in great numbers throughout
                    Mesoamerica. These screenfold books are known
                    as codices in contrast to other written documents
                    recorded on wood, stone, shell, and pottery. We
                    know that these codices included histories and genealogies,
                    king lists, tribute records, and astronomical,
                    calendrical, and ritual almanacs for divination
                    and prophecy. Various forms of maps and territorial
                    documents also existed, but the 16 or so surviving codices
                    are essentially genealogical/historical or ritual/
                    calendrical in nature. Of these, only four derive from
                    the Maya cultures. The Dresden, Paris, and Madrid Codices
                    – named for the cities where they are currently
                    located – probably came to Europe in the sixteenth
                    century and were subsequently lost to the world of
                    scholarship, only to be rediscovered in the nineteenth
                    century and recognized for what they were:
                    pre-Columbian screenfold divinatory books containing
                    ritual almanacs with calendrical, astronomical,
                    and other sacred information. The fourth Maya book,
                    most often known as the Grolier Codex – the only one
                    to be discovered in the twentieth century, allegedly by
                    looters in a dry cave in Mexico – has been the subject of great controversy since it was first presented to the
                    world in 1971 in New York City. Although most Maya
                    scholars have come to accept the Grolier Codex as a
                    genuine ancient artifact, some doubt had remained
                    in the minds of some, particularly in Mexico. What
                    follows is a brief account of this history from a personal
                    perspective along with a summary of this author’s
                    research arguing that the Codex is indeed a fragment
                    of a thousand year old hybrid-style Maya divinatory
                    almanac. If so, it is the oldest surviving book on paper
                    from the Americas.
                </p>



                <div className="full-image">
                    <img src={codicecarlson} alt="Códice John B. Carlson" />
                </div>




                <p className="text-gray-article">
                    Dr. Sáenz had black-and-white photographs taken of
                    this “Sáenz Codex,” sometime between 1965 and
                    1968. Eminent Yale Mayanist, the late Michael D.
                    Coe [1929-2019] (1992:227-229, 2006:198) first
                    saw these photographs when he visited the Sáenz
                    home in Mexico City in 1968 and held the actual Codex
                    in his hands. Coe describes that he was immediately
                    convinced that what he was seeing was a genuine
                    ancient pre-Columbian artifact. He was given
                    a set of black-and-white photographs that he took
                    back to New Haven and showed his Yale colleague
                    Floyd Lounsbury. “After considerable study, we both
                    concluded that this was the fourth known Maya manuscript”
                    (Coe 2006:198).

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
                    See more
                </a>

            </div>
            <Footer />
        </section>
    )

}



