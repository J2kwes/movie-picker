import React from 'react';

import './movie-item-styles.scss';

const MovieItem = ({ title, poster }) => (
    <div className="movie-container">
        <img  className="movie-poster" src={poster} alt={title} />
        <span className="movie-title">{title}</span>
    </div>
)

export default MovieItem;