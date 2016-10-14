import React from 'react';
import {MovieThumbnail} from './movie-thumbnail';
import {MovieApi} from './movie-api';

export class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies : []
        };
    }
    componentDidMount() {

        let api = new MovieApi();
        api.getMoviesList((result) => {
            this.setState({
                movies: result.data
            });
        });
    }

    render() {
        return(
            <div className="movies">
                {this.state.movies.map((movie) => (
                    <div className="col-md-4" key={movie._id}>
                        <MovieThumbnail name={movie.Title} id={movie._id} image={movie.Poster} date={movie.Year}/>
                    </div>
                ))}
            </div>
        );
    }
}
