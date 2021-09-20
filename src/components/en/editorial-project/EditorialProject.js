import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import portada from "../../../images/editorial/portada-editorial.png";
import { Play } from "../ui/Play";
import "./editorialproject.css";
import { ButtonMore } from "../ui/ButtonMore";
import papelAmate1 from "../../../images/editorial/papel-amate-1.png";
import papelAmate2 from "../../../images/editorial/papel-amate-2.png";
import quote from "../../../images/editorial/quote.png";
import { Modal } from "../modal/Modal.js";

export const EditorialProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <section className="view">
      <Navbar />
      <div className="header-section">
        <h1 className="section_titles">The codex and the editorial project</h1>
      </div>

      <Parallax bgImage={portada} strength={200} className="parallax-view">
        <div className="parallax-container-editorial">
          <Play onClick={openModal} />
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            url="https://www.youtube.com/embed/I79ftTdSlms"
          />
        </div>
      </Parallax>

      <article className="article-white">
        <p className="dropcap">
          The facsimile of the project on the Codex Maya of Mexico was created
          by indigenous Otomí artisans from the community of San Pablito
          Pahuatlan, who created the canvases of the publication through
          handmade papermaking processes.
        </p>

        <p>
          Currently, the inhabitants of San Pablito is one of the few
          communities in Mexico that elaborates a kind of bark paper, amate,
          which is a Nahua word meaning both paper and fig tree. This
          traditional knowledge was widely rooted in pre-Columbian Mexican
          cultures (Aztec, Maya and Purepecha, mainly), as has been documented
          since the 16th century.
          
          </p>
          <p>
          Most of the inhabitants of San Pablito are
          related in some way to the elaboration of amate paper, which makes it
          the most important economic activity for the community. Amate paper is
          also crucial to the physical and spiritual health of the community,
          and is part of their ritual and belief system. This last aspect is
          particularly relevant for the community of San Pablito; representing
          ritualistic images on paper is one of the pillars of their
          cosmovision. The deities, demons and other characters represented on
          paper are crucial to their spiritual system. In this sense, the
          knowledge involved in the processes of elaboration of amate paper is
          intrinsically connected to the entire belief system of the Otomi
          community of San Pablito. 
          </p>
          
          <p>
          However, several of the amate paper making
          processes are disappearing. There are several multifactorial
          challenges (poverty, criminal groups, migration, and poor access to
          essential services, to name a few) affecting indigenous communities in
          Mexico, and San Pablito is no exception. These challenges are
          radically affecting the transmission of papermaking knowledge to
          younger generations, mainly because the holders of the knowledge
          (mainly men) migrate to the United States in search of better living
          conditions. 
          
          </p>
          <p>
          The project on the Codex Maya of Mexico has contributed to
          the rescue of traditional processes that are disappearing due to
          different factors, including the use of new chemical materials,
          environmental conditions and the sustainability of the bark. With
          institutional support from the SRE, some processes have been rescued,
          such as the use of lime and ashes to soften paper, as well as the use
          of Mora tree bark, rescuing pre-Hispanic processes and materials. 
          
          </p>

          <p>
          It
          should be noted that the documentation of the processes will serve as
          a tool for the local community, researchers and civil society
          institutions committed to the preservation of traditional knowledge
          among Mexico's indigenous groups. Preserving, safeguarding and
          promoting the papermaking process and transmitting it to future
          generations is one of the main objectives of this project.
          </p>
          
      
         
      </article>
      <div className="more-container">
        <ButtonMore />
      </div>

      <Footer />
    </section>
  );
};
