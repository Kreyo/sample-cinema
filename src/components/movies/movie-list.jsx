import React from 'react';
import {MovieThumbnail} from './movie-thumbnail';
import {getMoviesList} from './movie-api';

export class MovieList extends React.Component {

    componentDidMount() {

        getMoviesList((result) => {
            this.props.setMovies(result.data);
        });
    }

    render() {
        return(
            <div className="movies">
                {this.props.movies.map((movie) => (
                    <div className="col-md-4" key={movie._id}>
                        <MovieThumbnail name={movie.Title} id={movie._id} image={movie.Poster} date={movie.Year}/>
                    </div>
                ))}
            </div>
        );
    }
}
