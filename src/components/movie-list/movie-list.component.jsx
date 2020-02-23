import React from 'react';
import axios from 'axios';

import MovieItem from '../movie-item/movie-item.component';

import './movie-list.styles.scss';

class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    fetchData = async () => {
        await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: 'e46fd120',
                s: this.props.searchTerm,
            }
        }).then(res => {
            this.setState({ results: res.data.Search }) 
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {results} = this.state;
        return (
            <div className="movie-list">
                <h2 className="movie-list-title">{this.props.title}</h2>
                <div className="movie-list-content">
                {results.slice(0, 5).map(movie => (
                    <MovieItem title={movie.Title} poster={movie.Poster} />
                ))}
                </div>
            </div>
        )
    }
}

export default MovieList;
