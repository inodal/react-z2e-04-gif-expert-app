import React, { useState, useEffect } from 'react'
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {

    
    const [images, setImages] = useState([]);

    // Use hook 'useEffect' to render only the first time
    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?&limit=10&q=Dragon+Ball&api_key=a6moXgoQ6vuFxhVHum2nE6CPtZdV66Uz';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        });
        console.log(gifs);
        setImages(gifs);
    };

    return (
        <div>
            <h3> { category } </h3>
            {
                images.map(img => (
                    <GifGridItems 
                        key={ img.id }
                        { ...img } 
                    />
                ))
            }
        </div>
    )
}
