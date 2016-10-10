import React from 'react';

export class MovieThumbnail extends React.Component {

    render() {
        return(
            <a className="movie" style={{display: "block"}} href={"/movie/"+this.props.id}>
                <div className="movie-thumbnail"
                     style = {{
                         backgroundImage: 'url(' + this.props.image + ')',
                         height: '368px',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                </div>
                <div className="movie-data">
                    <p>{this.props.name}</p>
                    <em>{this.props.date}</em>
                </div>
            </a>

        );
    }
}
