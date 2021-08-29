import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import "./iconografia.css";

import codice_03 from "../../../images/iconografia/codice_03.png";
import folio1_1 from "../../../images/iconografia/folio1/folio1_1.png";
import folio1_2 from "../../../images/iconografia/folio1/folio1_2.png";

export const Iconografia = () => {

  const [sticky, setSticky] = useState(false);

  const [background, setBackground] = useState('folio1-1');
  const divRef2 = useRef();
  const divRef3 = useRef();

  const stickyRef = useRef();

   
  useEffect(() => {
    const handleScroll = () =>{
      const windowTop = window.scroll();
      console.log(windowTop);

      const sticky = stickyRef.current;
      const inSticky = sticky.getBoundingClientRect();
      const addSticky = inSticky.y <=-400 ? true: false;
      setSticky(addSticky);
      
      const div2 = divRef2.current;
      const divValue2 = divRef2.current.className;
      const divY2 = div2.getBoundingClientRect();
      const backgroundImage = divY2.y <= 0 ? 'folio1-1'  : `${divValue2}`;
      setBackground(backgroundImage);

      const div3 = divRef3.current;
      const divValue3 = divRef3.current.className;
      const divY3 = div3.getBoundingClientRect();
      console.log(divY3)
      const backgroundImage3 = divY3.y <= 0 ? `${divValue3}` : 'folio1-2';
      setBackground(backgroundImage3);
    }; 

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])
   
 
  return (
    <section className="view-iconography">
      <Navbar />
      <div className="cover-iconography">
        <div className="title-iconography">
          <div className="author-section-iconography">
            <div>
              <hr />
            </div>
            <p className="author-name">Saeko Yanagisawa</p>
          </div>
          <h1 className="section_titles_iconography">
            Estudio <br /> Iconográfico
          </h1>
        </div>

        <div className="cover-iconography-image">
          <img src={codice_03} alt="codice-maya-folio-3" />
        </div>
      </div>
      <div ref ={stickyRef} className="intro-iconography">
        <p className="text-gray">
          Los Mayas dividían el ciclo sinódico de este astro en cuatro fases
          aparentes desde la Tierra. La fase uno, cuando Venus aparece como la
          Estrella de la Mañana; la dos, se oculta detrás del Sol; la tres,
          reaparece como la Estrella de la Tarde; y la cuatro, desaparece de
          nuevo en la sombra del Sol. Cada fase es presidida por un dios con
          conductas agresivas. Son deidades militares, de la muerte y el
          inframundo. Los augurios de cada fase son aciagos, nefastos y
          beligerantes, porque creían que cuando Venus se ocultaba, andaba en el
          Inframundo. El ciclo comienza en el día 1 Ajaw, el último día
          registrado en la última página que hoy está perdida. Es la fecha
          venusina por excelencia, en ella arranca y termina. 1 Ajaw es el alfa
          y el omega de toda la construcción del almanaque venusino.
        </p>
      </div>

    <div className="folio-container">
      <div className="change-image">
      <div className={background} id={sticky ? "is-sticky" : "no-sticky"}></div>
      </div>
        <div className="text-media">
            <div className="folio1a no-background">
              <p className="text-gray">El día 1 K’an [signo desaparecido, 1º signo de la columna jeroglífico], desde la primera salida de Venus como el Lucero Matutino en el día 1 Ajaw [último signo de la columna jeroglífica de la página XX, hoy perdida] pasaron 1,404 días [(584 x 2) + 236], </p>
            </div>

            <div ref={divRef2} className="folio1-2 no-background">
              <p className="text-gray" >Venus está oculto detrás del Sol. Allí permanecerá 90 días [número de anillo: (5x2) + (20 x 4).</p>
            </div>

            <div ref={divRef3} className="folio1-3 no-background">
              <p className="text-gray" >Venus está oculto detrás del Sol. Allí permanecerá 90 días [número de anillo: (5x2) + (20 x 4).</p>
            </div>

            <div className="audio-container"></div>
        </div>
    </div>
    
<div className="scrollytelling">


</div>
      
</section>
  );
};
