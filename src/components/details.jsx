import React from 'react';
import axios from 'axios';
import {Header} from './parts/header';
import {MovieTable} from './movies/movie-table';
import {MovieComments} from './movies/movie-comments';

export class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount() {
        axios.get('/api/details/'+this.props.params.movieId)
            .then((result) => {
                this.setState({
                    movie: result.data
                });
            });
    }


    render() {
        return(
                <div className="movie-details">
                    <Header/>
                    <div className="container-fluid">
                        <div className="col-md-12 movie-dates">
                            <h1>{this.state.movie.Title}</h1>
                            <div className="movie-thumbnail col-md-4" style={{backgroundImage: 'url('+this.state.movie.Poster+')'}}>
                            </div>
                            <MovieTable movie={this.state.movie}/>
                        </div>
                        <MovieComments source={"/api/details/comments/"+this.props.params.movieId} movieId={this.props.params.movieId}/>
                    </div>
                </div>
        );
    }
}
