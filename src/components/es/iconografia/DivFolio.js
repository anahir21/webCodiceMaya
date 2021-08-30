import React, { useEffect } from "react";
import UseSpy from "./useSpy";
import { UseEmitter } from "./emiter";

export const DivFolio = ({folio, text}) => {
    
const { setDataEvent } = UseEmitter();
const { isVisible, itemRef, ratio } = UseSpy();

useEffect(() => {
    if (isVisible) {
      setDataEvent(folio);
    }
  }, [isVisible, folio, setDataEvent]);
    return (
        <div ref={itemRef} folio={folio}>
            <p className='text-gray'>{text}</p>
        </div>
    )
}
