import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // Avoid default behaviour that will submit and refresh whole view
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue.trim(), ...cats]); // Show new first
            setInputValue('');
        }
        
    }

    return (
        <>
        <form onSubmit= { handleSubmit }>
        <p>{ inputValue }</p> 
            <input 
                type ="text"
                value = { inputValue }
                onChange = { handleInputChange }
                
            />
        </form>
            
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

