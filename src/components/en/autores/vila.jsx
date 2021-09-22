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
                    zero, mathematics  <br />
                    and the Maya.

                </h3>

                <p className="dropcap-article text-gray-article">
                    he etymology of mathematics is “that which is related
                    to knowledge”, therefore modern culture ascribes
                    such importance to this science and, particularly,
                    its application in any other scientific discipline.
                    Needless to say, the etymology of the word mathematics
                    goes well beyond simply counting or things
                    related to numbers. Mathematics help us establish
                    systematic models of what we know, in order to predict
                    what is expected: the development of a bacterium,
                    climate evolution, the stability of a bridge, etc.

                </p>
                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            The art of counting is among humanity’s first registered
                            knowledge.
                        </p>

                    </div>
                </blockquote>

                <p className="text-gray-article">
                    Bones found in caves inhabited
                    thousands of years ago provide evidence that ancient
                    man counted, for they bore the marks of quantities,
                    perhaps the objects of a hunt, or animals. The
                    evolution of a numeral system is a very impressive
                    feat because knowledge that is natural to all of us
                    nowadays did not appear in math history in the same
                    way until much later. The concept of zero is part of
                    this more recent knowledge, as are numeral systems.
                    Let us begin by saying that few of humanity’s cultures
                    developed their own system of numeration.
                    For example, the Romans, Greeks and Hebrews
                    all represented numbers by using the alphabet. Although
                    they did use codes to go classifying or noting
                    large numbers, this system was too complicated to
                    develop useful arithmetic. To this day, due to the
                    length of time they were in use, we still use roman
                    numerals, for example to indicate centuries1 or to
                    classify monarchs by name: Philip II, Charles V. But
                    try to imagine if we only knew this system of numeration:
                    how could we develop simple algorithms
                    for sums such as IX + VII, MDI + XCVI, let alone for
                    multiplications? Our ancestors who practiced commerce
                    clearly must have used sums often, and in a
                    system such as the Roman one, it was certainly too
                    complicated.



                </p>


                <p className="text-gray-article">
                    To simplify the system of numeration, humanity, or
                    various cultures of the past, had to develop others.
                    Nowadays, we humans of the twenty-first century
                    use a decimal system with Arabic numerals, which will be explained briefly below because this will help
                    describe others.
                </p>

                <p className="text-gray-article">


                    Zero could be the symbol which represents the absence
                    of a quantity in the positional notation, or the number
                    that represents the void quantity. Nowadays it is obvious
                    to us what the void quantity is, but this is the result of
                    thousands of years of evolution of our understanding
                    of mathematics. It was not so obvious to cultures who
                    attempted to develop these concepts.

                </p>

                <div className="full-image">
                    <img src={vila01} alt="Ricardo F. Vila Freyer" />

                </div>

                <p className="text-gray-article">
                    It is noteworthy that in the Maya system, numbers
                    could have other types of representations, just
                    like zero. Think of the fact that nowadays we can
                    represent numbers with words, as occurs in legal
                    documents, and with digits. Something similar occurred
                    with the Maya, who had glyphs associated
                    with both numbers and gods, a sort of “calligraphic”
                    representation of the number in addition to representing
                    it with the system mentioned above.





                </p>


                <p className="text-gray-article">

                    At least six glyphs for zero are known, for example.
                    And these representations could have varied between
                    the different cities and epochs in the history
                    of the Maya culture.

                </p>


                <p className="text-gray-article">


                    As we can see, every page of our Maya Codex of
                    Mexico includes the representation of numbers.
                    Furthermore, the Maya were always careful to
                    date their great political and religious statements
                    on stelae and bas-reliefs. Each stela describing
                    a special event of a sacred governor, or some
                    religious occasion, included the date, recorded
                    in their own system of notation. This is one of the
                    great achievements of Maya culture. Not only the
                    autonomous development and discovery of zero
                    and a system of notation as efficient as ours, but
                    also their calendrical system. Not to mention their
                    writing system.
                </p>



            </article>
            <div className="read-more">
                <a
                    href={pdfVila}
                    download="Vila.pdf"
                >
                    See more
                </a>
            </div>

            <Footer />
        </section>
    )

}



