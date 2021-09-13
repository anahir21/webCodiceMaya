import React, { useEffect } from "react";
import UseSpy from "./useSpy";
import { UseEmitter } from "./emiter";
import  AudioPlay  from "../ui/AudioPlay";

export const DivFolio = ({title, folio, text, url, sound}) => {
    
const { setDataEvent } = UseEmitter();
const { isVisible, itemRef} = UseSpy();

useEffect(() => {
    if (isVisible) {
      setDataEvent(folio, title, sound);
    }
  }, [isVisible, title, folio, sound, setDataEvent]);
    return (
        <div ref={itemRef} folio={folio}>
            {title? <h3 className="section_titles text-left">{title}</h3> :null}
            <p className='text-gray'>{text}</p>
            { sound ? <AudioPlay url={url}/> : null }
        </div>
    )
}
