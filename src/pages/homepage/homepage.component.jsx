import React from 'react';

import MovieList from '../../components/movie-list/movie-list.component';

import './homepage.styles.scss'

// key = e46fd120

const HomePage = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <MovieList title='Star Wars' searchTerm='star wars' />
                <MovieList title='Avengers' searchTerm='avengers' />
                <MovieList title='Harry Potter' searchTerm='harry potter' />
                <MovieList title='Transformers' searchTerm='transformers' />
            </div>
        </div>
    )
}

export default HomePage;
