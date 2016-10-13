import React from 'react';
import axios from 'axios';
import {MovieThumbnail} from './movie-thumbnail';

export class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies : []
        };
    }

    componentDidMount() {
        axios.get(this.props.source)
            .then((result) => {
                this.setState({
                    movies: result.data
                });
            }).catch(function (error) {
            console.log(error);
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
