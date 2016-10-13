import React from 'react';

export class MovieTable extends React.Component {

    render() {
        return(
            <div className="movie-credentials col-md-7 col-md-offset-1">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                        <tr>
                            <td>Director</td>
                            <td>{this.props.movie.Director}</td>
                        </tr>
                        <tr>
                            <td>Year of release</td>
                            <td>{this.props.movie.Released}</td>
                        </tr>
                        <tr>
                            <td>Rated</td>
                            <td>{this.props.movie.Rated}</td>
                        </tr>
                        <tr>
                            <td>Runtime</td>
                            <td>{this.props.movie.Runtime}</td>
                        </tr>
                        <tr>
                            <td>Actors</td>
                            <td>{this.props.movie.Actors}</td>
                        </tr>
                        <tr>
                            <td>Metascore</td>
                            <td>{this.props.movie.Metascore}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
