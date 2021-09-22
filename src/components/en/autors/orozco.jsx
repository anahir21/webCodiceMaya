import React, { useEffect } from 'react';
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import quote from "../../../images/blackquote.png";
import pdfOrozco from "../../../documents/orozco.pdf"
import "./autores.css";

export const OrozcoEn = () => {
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
                    The Mayan Legacy <br />
                    is Love of Knowledge


                </h3>

                <p className="dropcap-article text-gray-article">
                    When I was a child and an adolescent, I used to
                    observe the dawn sky from the yard of my
                    home, in Pascual Orozco (a small town of 2,000
                    inhabitants, at the foot of the Sierra Tarahumara). Sitting
                    in the doorway, I located the brightest stars and
                    named them. They continued their incessant journey
                    through infinity. If age-related concerns overwhelm
                    me, I  seek them out, speak to them by name and ask
                    for advice. I did not know that a small-town girl, ignorant
                    of everything, repeated an action common to
                    human beings: gazing at the cosmos in ecstasy. The
                    stars have been baptized many times with distinct
                    names from different corners of the planet, they are
                    feared, they are praised, they are beseeched and interrogated.
                    The universe’s intriguing beauty has accompanied
                    our species since it exists, and challenges us
                    to sing and explore it, for art and science were born
                    there. Curiosity and need are their mother. First, they
                    gave birth to religions and magic, and then wise men
                    and women looked for the causes of the phenomena
                    that threatened or benefited the group or tribe.





                </p>
                <p className="text-gray-article">

                    Although magic and religions struggle to remain -it
                    is no longer their time, science is gaining ground- its
                    influence on the hopes of humans will remain if we do
                    not adopt a scientific mindset.


                </p>
                <p className="text-gray-article">

                    Observing is the first step in the generation of knowledge
                    and an act of survival. Exploring the environment
                    allows us to find food and protect ourselves from
                    enemies and natural events. It leads us to question
                    ourselves and find out the reasons for its occurrence.
                    Orally, graphically, or through systematized language,
                    we transmit what we learn to our children, so that
                    they can enhance it and protect themselves better.
                    So did our great-great-grandparents, who emerged
                    in southern Africa more than 200,000 years ago and
                    began their pilgrimage around the planet 50,000
                    years ago. They reached Europe, Asia, and Oceania,
                    and the American continent between 15,000 and
                    30,000 years ago (a contested fact). After their journey
                    around Earth, and with the accumulated knowledge,
                    millennia later, the ambitious humans sought
                    to conquer the cosmos that attracts us like the Pied
                    Piper of Hamelin did the town’s children. Thus, we
                    have reached Mars and achieved the feat of receiving
                    fascinating images of its surface in these very days.

                </p>

                <p className="text-gray-article">

                    Since before the Christian era, the old Mesoamerican
                    cultures, among them the Maya peoples, who remain,
                    inhabited the spaces where we live today. We tend
                    to forget the vastness of their knowledge, but their
                    findings are universal, and Mexicans are their lucky
                    heirs. This legacy pushes us to rescue their knowledge,
                    comparable to that of the European and Asian
                    cultures of the time. The Maya Codex of Mexico that is presented here, together with the analysis made by
                    distinguished scientists from different fields of knowledge,
                    show the world the neatness of the work that
                    science, the magic of the cosmos and the jungle, inspired
                    in the Maya.


                </p>

                <blockquote>
                    <img src={quote} alt="icon-quote" />
                    <div className="text-quote">
                        <p className="p-quote">
                            A morning star, beautiful and fearsome, transits the
                            Mesoamerican sky
                        </p>

                    </div>
                </blockquote>



                <p className="text-gray-article">
                    What did that
                    brilliant route have to do with the weather and the
                    seasons of the year, the crops and the devastations
                    by Nature that ravaged the Maya? They observed
                    the star, correlated its appearance with events in its
                    environment, were surprised by its recurring repetition
                    in time and space, recorded, reviewed and corrected
                    their observations. They followed in the footsteps
                    of current scientific research! Observe, inquire,
                    annotate, and analyze the facts. In anticipation and
                    homage to Venus, they traced its path. Knowing that
                    sacrifices and rituals would help them avoid the consequences
                    of its movements: diseases, droughts, and
                    disasters. They painted the faces of the planet with
                    the exact dates it appeared. When they could not see
                    it, they assumed Venus was in the underworld. Their
                    findings and conclusions, mixed with magic and religion,
                    products of ignorance about certain phenomena,
                    astonish us 2,000 years later.


                </p>
                <p className="text-gray-article">
                    The Maya knew how to make their paper, colors, and
                    brushes, and use them meticulously and masterfully
                    to seek knowledge. They represented nothingness as
                    very few peoples on Earth knew how, inventing their
                    own zero and learning to place it properly in their vigesimal
                    system for mathematics. Other cultures also
                    invented zero, but the distance and communications at the time prevented socialization of this knowledge.
                    Zero is said to have originated in Cambodia between
                    the 3rd and 4th centuries, but it is unlikely that the
                    Maya would have heard of it. They studied the Milky
                    Way, they left constructions that amaze the world.
                    Scribes, painters, mathematicians and astronomers
                    from other towns met to debate and achieve greater
                    precision in the recording of data, similar to today’s
                    scientific congresses. They knew that a discovery affects
                    future generations, which is a stepping-stone to
                    discover other secrets of Nature and apply them for
                    the benefit of society (hopefully). From Maya knowledge
                    and the knowledge of others regarding astronomy,
                    mathematics, geometry and more, humanity
                    reached the Moon in 1969. The huge knowledge that
                    was produced to achieve this feat led to the generation
                    of today’s amazing communications, which allow
                    us to be in contact with people who are thousands of
                    kilometers away, evidencing the repercussions of a
                    scientific project.
                </p>
                <p className="text-gray-article">

                    The use of herbalism by the Maya, coupled with much
                    greater knowledge that has accumulated since their
                    time, learning about living beings, has helped find
                    ways to defeat pathogenic microorganisms, such as
                    viruses, bacteria and protozoa that undermine human
                    health. Today, we face SARS-CoV-2, causing millions
                    of deaths in the world, while humanity advances,
                    at first blindly, and then illuminated by the scientific
                    findings that have led to the production of vaccines
                    and drugs in various parts of the world, to defeat it.
                    We Mexicans are also in that battle for health and life,
                    looking for a Mexican vaccine. We need to keep the
                    Mayan legacy in mind, to become current giants of science and technology, allowing us to face this and
                    other microorganisms with the best tools.
                </p>
                <p className="text-gray-article">

                    Finally, I welcome the edition of the De la Cruz Badiano
                    Codex and Maya Codex of Mexico that has been endorsed
                    by the Ministry of Foreign Affairs, the Ministry of Culture,
                    the National Institute of Anthropology and History,
                    and the National Library of Anthropology and
                    History. I invite everyone to the fascinating adventure
                    of reading it.
                </p>


            </article>

            <div className="read-more">
                <a
                    href={pdfOrozco}
                    download="orozco.pdf"
                >
                   See more
                </a>
            </div>
            <Footer />
        </section>
    )

}



