import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
// import ReactDOM from 'react-dom';

const GifExpertApp = () => {
    const initialState = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(initialState);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            
            <ol>
                {
                    categories.map(c => <li key={ c }>{ c }</li>)
                }
            </ol>
        </>
    );

};

export default GifExpertApp;