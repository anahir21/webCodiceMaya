import React from 'react'
import { UseEmitter } from './emiter';

export const ImageFolio = () => {
    const { data} = UseEmitter();

    return (
        <div id='aSticky' className = {data}>
            
        </div>
    )
}
