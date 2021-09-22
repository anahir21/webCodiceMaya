import React, { useState, useRef, useEffect } from "react";
import { Menu } from "../navbar/Menu";
import  UseSpy from "./useSpy";
import { UseEmitter, Emmiter } from "./emiter";
import { useInView } from 'react-intersection-observer';



import "./iconografia.css";

import codice_03 from "../../../images/iconografia/codice_03.png";
import folio1_1 from "../../../images/iconografia/folio1/folio1_1.png";
import folio1_2 from "../../../images/iconografia/folio1/folio1_2.png";
import { ImageFolio } from "./ImageFolio";
import { TextFolio } from "./TextFolio";

 
export const Iconografia = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  })
  
  return (
    
    <section className="section-iconography">
      <Menu/>
      <div className="cover-iconography">
        <div className="title-iconography">
          <div className="author-section-iconography">
            <div>
              <hr />
            </div>
            <p className="author-name left-text">Saeko Yanagisawa</p>
          </div>
          <h1 className="section_titles_iconography">
            Estudio <br /> Iconográfico
          </h1>
        </div>

        <div className="cover-iconography-image">
          <img src={codice_03} alt="codice-maya-folio-3" />
        </div>
      </div>
      <div ref={ref}  className="intro-iconography">
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
     
      <div className="folio-container" >
        <Emmiter>
          <div className="scrollytelling">
          <div className={inView ? 'no-sticky': 'is-sticky' }>
          <ImageFolio />
          </div>
          
          <TextFolio></TextFolio>
          </div>
        </Emmiter>
        
      </div>
      <div>
      
    </div>
    </section>
    
   
  );
};