import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import ReactDOM from 'react-dom';

const GifExpertApp = () => {
    const initialState = ['MotoGP'];
    const [categories, setCategories] = useState(initialState);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            
            <ol>
                {
                    categories.map(c => (
                        <GifGrid 
                            key = { c }
                            category = { c } 
                        />
                    ))
                }
            </ol>
        </>
    );

};

export default GifExpertApp;