import React from 'react';
import {MovieComment} from './movie-comment';
import {CommentForm} from './movie-add-comment';
import {MovieApi} from './movie-api';

export class MovieComments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments : []
        }
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments() {
        let api = new MovieApi();

        api.getCommentList(this.props.movieId, (result) => {
            this.setState({
                comments: result.data
            });
        });
    }

    renderCommentList() {

        return(
            this.state.comments.map((comment) => (
                <MovieComment comment={comment} key={comment._id}/>
            ))
        );
    }

    addComment(body, id) {
        let api = new MovieApi();
        let data = {
            'body': body,
            'movieId': id
        };

        api.addComment(data, (result) => {
            this.fetchComments();
        });
    }

    render() {
        return(
            <div className="movie--comments col-md-12">
                <h3>User comments</h3>
                {this.state.comments.length >= 1
                    ? this.renderCommentList()
                    : <p>Whoops, looks like no comments here yet. Why not leave one?</p>}
                <CommentForm addComment={this.addComment.bind(this)} movieId={this.props.movieId}/>
            </div>
        );
    }
}
