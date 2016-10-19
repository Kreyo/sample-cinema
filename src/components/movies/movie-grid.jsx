import React from 'react';
import {MovieThumbnail} from './movie-thumbnail';
export class MovieGrid extends React.Component {

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
