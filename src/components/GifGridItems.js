import React from 'react'

export const GifGridItems = ({id, title, url }) => {

    console.log(`${id}:\ntitle: ${title} \nurl: ${url}`);
    return (
        <div>
            { title }
        </div>
    )
}
