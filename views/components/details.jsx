import React from 'react';
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
        this.serverRequest = $.get('/movie-ajax/'+this.props.params.movieId, function (result) {
            this.setState({
                movie: result
            });

        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
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
                        <MovieComments source={"/ajax-comments/"+this.props.params.movieId}/>
                    </div>
                </div>
        );
    }
}
