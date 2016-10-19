import React from 'react';
import {getMoviesList} from './movie-api';
import {MovieGrid} from './movie-grid';

export class MovieList extends React.Component {

    componentDidMount() {

        getMoviesList((result) => {
            this.props.setMovies(result.data);
        });
    }

    render() {
        return(
            <MovieGrid movies={this.props.movies}/>
        );
    }
}
