import React, { useEffect } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import "./codex.css";
import tabla from "../../../images/codice/tabla.png";
import orbitas from "../../../images/codice/orbitas.png";
import tarjeta3 from "../../../images/codice/tarjeta3.png";
import tarjeta6 from "../../../images/codice/tarjeta6.png";
import tarjeta7 from "../../../images/codice/tarjeta7.png";
import tarjeta4 from "../../../images/codice/tarjeta4.jpg";

export const Codex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="view">
      <Navbar />

      <div className="cover-article"></div>
      <article className="text-article">
        <div className="author-section">
          <p className="author-name">Saeko Yanagisawa</p>
          <div>
            <hr />
          </div>
        </div>

        <h3 className="title-article">
          Iconographic study <br />
          Maya Codex of Mexico
        </h3>

        <p className="dropcap-article text-gray-article">
          The present form of the ten-page Codex Maya of Mexico is not its
          original form, but is a part of a longer document. The table known as
          the "Tablet of Venus" or the "Great Cycle of Venus" is known to be
          missing eight pages before and two pages after (see diagram).{" "}
        </p>
        <div className="full-image">
          <img src={tabla} alt="table" />
        </div>

        <p className="text-gray-article">
          The Great Cycle of the planet Venus is a combined table of three
          important cycles in Mesoamerica: the Venusian synodic period of 584
          days, the solar or vague year calendar of 365 days and the divinatory
          almanac of 260 days. The combination of these three results in 37,960
          days with which the ancient Maya tried to predict lunar and solar
          eclipses, since they related the movement of Venus with these
          phenomena.
        </p>

        <p className="text-gray-article">
          In both the Maya Codex of Mexico and the Dresden Codex, the synodic
          cycle of Venus is divided into four apparent phases as seen from
          Earth. The Great Venus Cycle of the Codex Maya of Mexico in original
          form would consist of five repeated occurrences of these four phases,
          one per folio, over twenty pages. On each page there is a hieroglyph
          of a day of the divinatory almanac thirteen times repeated vertically
          with different numerical coefficient. This means that the five synodic
          cycles of Venus must be multiplied by thirteen. The figure it gives is
          37,960 days and is equivalent to the sum of five synodic cycles of
          Venus (5 x 584 days) or that of eight vague years (8 x 365 days)
          multiplied by thirteen, which in turn coincides with two cycles of the
          Mesoamerican calendar that combines the 365-day and 260-day calendar
          (2 x 18,980 days, or 2 x 52 years) or, in other words, 65 synodic
          cycles of Venus of 584 days each (65 x 584 = 37,960 days).
        </p>

        <div className="full-image">
          <img src={orbitas} alt="table" />
        </div>

        <h6 className="subtitle-article">Way of reading</h6>
        <p className="text-gray-article">
          The reading begins in the last hieroglyph in the column of the last
          page (page XX, today lost), which, together with its numerical
          coefficient, is 1 Ajaw and corresponds to the first rising of the
          morning star. It continues 236 days later in the first hieroglyph with
          its coefficient of the column of days of the divinatory almanac on the
          first page looking from our left hand. Then it goes to the first
          hieroglyph on the second page and then continues to the first
          hieroglyph on the third page, so it goes until the last page. After
          that, it goes back to the first page but now with the second sign of
          the hieroglyphic column. Thus it goes from left to right from top to
          bottom until the last hieroglyph on the last page as if the codex were
          a big screw (see diagram). The last point of the screw is the day 1
          Ajaw, Venusian date par excellence among the Mayas and the base of all
          the construction of the Venus table, which would be found on the
          twentieth page that unfortunately is now lost. It must be said that 1
          Ajaw is, therefore, the starting day as well as the conclusion of the
          whole structure of 37,960 days (104 years of 365 days each or 65 Venus
          cycles). 1 Ajaw is the alpha and the omega of the whole construction.
        </p>

        <div className="full-image">
          <img src={tarjeta3} alt="table" />
          <img src={tarjeta6} alt="table" />
        </div>

        <h6 className="subtitle-article">Structure of each page</h6>
        <p className="text-gray-article">
          Each page has the same structure. It is divided into four parts. 1)
          Hieroglyphic day column. The column of the hieroglyph of the days of
          the divinatory almanac represents the initial dates of the phase of
          Venus with its omen presented on the page. The same hieroglyph is
          repeated 13 times but accompanied by a different numerical
          coefficient. The coefficient is painted red and a dot is read as one
          and a slash as five. The minimum is one and the maximum is thirteen.
          The 260-day almanac consists of the combination of a number from 1 to
          13 with one of twenty hieroglyphs or day names. This combination
          functions as the calendar day of both the divinatory and the solar
          year.
        </p>
        <div className="full-image">
          <img src={tarjeta7} alt="table" />
          <img src={tarjeta4} alt="table" />
        </div>

        <p className="text-gray-article">
          2) Distance number. A ring or lump in red color tied with a knot is a
          hieroglyph of the Tzol word and means "to place in order". It
          represents the distance number or it is also known as the ring number
          which signifies the days that the phase lasts. The value of the number
          sign is different if it is inside the ring or outside. Inside a dot is
          worth one and a bar is worth five, both in black, while outside there
          are only red dots and each is worth twenty. If there is one dot and
          three black bars inside the ring and eleven red dots outside, the sum
          is 236 days: 1 + (5 x 3) + (20 x 11). There are four figures depending
          on the position of Venus: 90, (5 x 2) + (20 x 4), is when Venus is
          invisible, because it is behind the Sun (Superior Conjunction) (pages
          1, 5 and 9), 250, (5 x 2) + (20 x 12), is visible as the Evening Star
          (pages 2, 6 and 10), 8, 3 + 5, is invisible because it is between the
          Earth and the Sun (Inferior Conjunction) (pages 3 and 7) and 236 is
          visible as the Morning Star (pages 4 and 8). The duration of each
          phase does not coincide with actual astronomical calculations, but are
          manipulated figures in relation to both the days of the divinatory
          almanac and multiples of lunations because the ultimate purpose of the
          Venus table is to forecast eclipses for specific rituals. 3) Deity. A
          deity personified Venus assaults a victim. They are gods with negative
          characteristics such as war, death or the underworld because the Mayas
          believed that during the time when Venus was invisible she was in the
          underworld and when she appeared, she was loaded with misfortune,
          illness and death. They also blamed it for causing eclipses, because
          they thought that the aggressive star bit the Sun or the Moon. By the
          characteristic of the probable period of its elaboration, the Early
          Postclassic (900-1200 A.D.), the Codex Maya of Mexico is a hybrid
          codex of Central Mexican and Mayan style, the gods can carry elements
          of both cultural and artistic traditions. 4) Victim. An
          anthropomorphic, architectural or nateraleza figure affected by the
          negative action of Venus.
        </p>
        <p className="text-gray-article">
          Note: There are several ways of spelling the names of the days of the
          260-day divinatory almanac. Here we use the modern spelling in Yucatec
          Maya.
        </p>
      </article>

      <Footer />
    </section>
  );
};
