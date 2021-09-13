import React from "react";
import { DivFolio } from "./DivFolio";

export const TextFolio = () => {
  return (
    <div className="text-folio-container">
      <DivFolio
        title="Folio 1"
        folio="folio1-1"
        text='El día 1 K’an [signo desaparecido, 1º signo de la columna
              jeroglífico], desde la primera salida de Venus como el Lucero
              Matutino en el día 1 Ajaw [último signo de la columna jeroglífica
              de la página XX, hoy perdida] pasaron 1,404 días [(584 x 2) +
              236],{" "}'
        url="1"
        sound="lamina_1"
      />

      <DivFolio
        folio="folio1-2"
        text="Venus está oculto detrás del Sol. Allí permanecerá 90 días [número de anillo: (5x2) + (20 x 4)."
        url="lamina_1"
      />

      <DivFolio
        folio="folio1-3"
        text="El dios K’awiil, dios de la riqueza y abundancia, quien personifica a Venus, toma el prisionero."
        url="lamina_1"
      />

      <DivFolio
        title="Folio 2"
        folio="folio2-1"
        text="El día 12 Hix [1º signo de la columna jeroglífica], al atardecer, Venus aparece por el Oeste."
        url="2"
        sound="lamina_2"
      />
      <DivFolio
        folio="folio2-2"
        text="Venus es el dios Kisin, el dios de la muerte, ataviado como guerrero tolteca con yelmo de jaguar, saca su aliento de putrefacción."
        url="2"
      />
      <DivFolio
        folio="folio2-3"
        text="Venus es el dios Kisin, el dios de la muerte, ataviado como guerrero tolteca con yelmo de jaguar, saca su aliento de putrefacción. "
        url="2"
      />

      <DivFolio
        title="Folio 3"
        folio="folio3-1"
        text='El día 3 K’an [signo desaparecido], Venus se oculta en el Inframundo, lugar obscuro, lleno de desgracia, ahí permanecerá por ocho días [número de anillo: 5 + 3].'
        url="3"
        sound="lamina_3"
      />
      <DivFolio
        folio="folio3-2"
        text='El día 3 K’an [signo desaparecido], Venus se oculta en el Inframundo, lugar obscuro, lleno de desgracia, ahí permanecerá por ocho días [número de anillo: 5 + 3].'
        url="3"
      />
      <DivFolio
        folio="folio3-3"
        text='Corre el peligro a los gobernantes.'
        url="3"
      />

    </div>
  );
};
