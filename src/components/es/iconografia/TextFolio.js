import React from 'react'
import { DivFolio } from './DivFolio'

export const TextFolio = () => {
    return (
        <div className="text-folio-container">
            <DivFolio folio='folio1-1' text='El día 1 K’an [signo desaparecido, 1º signo de la columna
              jeroglífico], desde la primera salida de Venus como el Lucero
              Matutino en el día 1 Ajaw [último signo de la columna jeroglífica
              de la página XX, hoy perdida] pasaron 1,404 días [(584 x 2) +
              236],{" "}'/ >

            <DivFolio folio='folio1-2' text='Segundo Texto'/ >
            
        </div>
    )
}
