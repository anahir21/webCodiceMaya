import React from 'react';
import {CgPlayButtonO} from 'react-icons/cg'
import './ui.css'

export const Play = ({onClick}) => {
    
    return (
        <button onClick = {onClick} className ="play"> <CgPlayButtonO className ="icon-play"/> </button>
    )
}
