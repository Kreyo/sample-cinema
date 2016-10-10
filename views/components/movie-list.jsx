import React from 'react';

export class MovieList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movies : []
        }
    }

    componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                movies: result
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return(
            <div className="movies">
                {this.state.movies.map((movie) => (
                    <div className="col-md-4" key={movie.id}>{movie.Title}</div>
                ))}
            </div>
        );
    }
}
