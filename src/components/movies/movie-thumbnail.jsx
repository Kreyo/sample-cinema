import React from 'react';
import {Link} from 'react-router'

export class MovieThumbnail extends React.Component {

    render() {
        return(
            <Link className="movie" style={{display: "block"}} to={`/movie/${this.props.id}`}>
                <div className="movie-thumbnail"
                     style = {{
                         backgroundImage: 'url(' + this.props.image + ')'
                     }}>
                </div>
                <div className="movie-data">
                    <p>{this.props.name}</p>
                    <em>{this.props.date}</em>
                </div>
            </Link>

        );
    }
}
