import React from 'react';
import {Header} from './header';

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
                movie: result[Object.keys(result)[0]]
            });

            console.log(result);
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
                        <div className="col-md-8">
                            <h1>{this.state.movie.Title}</h1>
                            <div className="movie-thumbnail" style={{backgroundImage: 'url('+this.state.movie.Poster+')'}}>

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
