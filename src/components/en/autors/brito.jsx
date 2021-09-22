import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import quote from "../../../images/blackquote.png";
import brito01 from "../../../images/brito/brito-article01.jpg";
import brito02 from "../../../images/brito/brito-article02.jpg";
import pdfBrito from "../../../documents/brito.pdf"



import "./autores.css";


export const BritoEn = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="view">
            <Navbar />

            <div className="cover-article cover-brito"></div>
            <article className="text-article">
                <div className="author-section">
                    <p className="author-name">Baltazar Brito Guadarrama</p>
                    <div>
                        <hr />
                    </div>
                </div>


                <h3 className="title-article">
                    The Legacy of an Ajtz’Ihb. <br />
                     The Maya Codex of Mexico.

                </h3>

                <p className="dropcap-article text-gray-article">
                    August 30th, 2018, was a memorable date for the study of Mesoamerican history. At 10 a.m. that day, a press conference organized by the INAH (National Institute of Anthropology and History) in the Fray Bernardino de Sahagún Auditorium, in the MNA (National Museum of Anthropology), confirmed to the entire world that the controversial
                    Grolier Codex was an authentic document. The interand
                    trans-disciplinary studies it underwent determined
                    that it was the continent’s oldest legible pre-
                    Hispanic manuscript; therefore, henceforth it was
                    renamed the Maya Codex of Mexico.
                </p>
                <p className="text-gray-article">
                    But where did this important document, which was
                    originally disdained by the academic community,
                    come from? Why was it surrounded by polemics all
                    those years, that questioned its authenticity? To find
                    out, it is necessary to relate its historical background.

                </p>
                <h3 className="subtitle-author"> “It was nothing short of a miracle” </h3>

                <p className="text-gray-article">
                    Were the discreet
                    words used by Mayanist Michael D. Coe in April
                    1971, during an interview with The New York Times
                    on the discovery of the fourth Maya Codex, which
                    was being publicly exhibited for the first time, classified
                    as an original, within the Grolier Club. “The
                    largest and oldest society in the USA for bibliophiles
                    and enthusiasts of graphic arts”.18 Subsequently, in
                    1973, Coe decided to write about the discovery of
                    that Mesoamerican manuscript in The Maya Scribe and
                    His World. He mentioned it had been discovered in a
                    cave, along with a mosaic mask and, furthermore,
                    that he had undertaken Carbon-14 dating in order
                    to dispel any doubts on its antiquity; finally, he noted
                    that its content concerned the cycles of Venus and
                    its characteristic style and iconography were the
                    product of enculturation developed between the
                    Maya and Toltec during the Postclassic, presenting
                    a similarity with the Mixteca-Puebla tradition.



                </p>

                <p className="text-gray-article">


                    From the outset, the North American investigator’s
                    words were succinct; they never dispelled misgivings
                    on the document’s origin, let alone clarified
                    the name of its owner. He was completely hermetic.
                    However, that same year, Karl E. Mayer, a reporter
                    for The New Yorker, published an article entitled “A Reporter at Large. The Plundered Past” wherein he
                    denounced various cases of illegal sales of artwork
                    and archaeological artefacts.20 Among the secret
                    informants who had provided information were
                    traffickers and dealers with a shady reputation.
                    Once of them confessed the following:

                </p>
                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            This codex [the Grolier] was found in a wooden
                            box—I happen to know this although it is not
                            mine—and the box was well shut, so tightly
                            that humidity did not ruin the bark paper […]
                            The codex was discovered in a cave in Chiapas
                            and formed part of a funerary group. I expect it
                            to sell for six figures and disappear from sight
                            for several years. Then it will reappear with a
                            collector’s name attached to it. It was found
                            with a few other first-class objects, including
                            the Dumbarton Oaks mosaic mask.


                        </p>
                    </div>
                </blockquote>

                <div className="gallery-items-2">
                    <img src={brito01} alt="Baltazar Brito" />
                    <img src={brito02} alt="Baltazar Brito" />
                </div>


                <p className="text-gray-article">
                    Although these declarations hinted things, for a long
                    time it was not certain who the mysterious owner of
                    the document was; nevertheless, there were strong
                    suspicions it was Sáenz, since he had been involved
                    in the sale of the Dumbarton Oaks mask. Almost
                    three decades later, in 1992, Coe broke his silence
                    and expanded on his original declaration, confirming
                    with the following words in Reading the Maya Glyphs
                    that the Mexican collector owned the codex.


                </p>

            </article>
            <div className="read-more">
                <a
                    href={pdfBrito}
                    download="baltazar_brito.pdf"
                >
                    See more
                </a>

            </div>
            <Footer />
        </section>
    );

};



