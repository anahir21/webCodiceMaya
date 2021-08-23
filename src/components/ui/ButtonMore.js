import React from 'react';
import { RiArrowDropRightLine } from "react-icons/ri"
import './ButtonMore.css'


export const ButtonMore = (onClick) => {
    return (
        <button className="button__ver_mas" onClick = {onClick}>
            Ver más <RiArrowDropRightLine />
            </button>
    )

}

