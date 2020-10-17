import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItems = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItems.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}