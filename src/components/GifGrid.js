import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGif';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {

    
    const [images, setImages] = useState([]);

    // Use hook 'useEffect' to render only the first time
    useEffect(() => {
        getGifs(category)
          .then(imgs => setImages(imgs))
    }, [category]);


    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                
                {
                    images.map(img => (
                        <GifGridItems 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    );
}
