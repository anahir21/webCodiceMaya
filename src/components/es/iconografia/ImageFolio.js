import React from 'react'
import { UseEmitter } from './emiter';

export const ImageFolio = () => {
    const { data, title} = UseEmitter();
    console.log(data, title)

    return (
        <div id='aSticky' className = {data}>
            <h3 className="section_titles text-left">{title}</h3>
            
        </div>
    )
}
