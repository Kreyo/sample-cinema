import React from 'react';
import {MovieComment} from './movie-comment';
import {CommentForm} from './movie-add-comment';
import {getCommentList, addComment, removeComment} from './movie-api';

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

        getCommentList(this.props.movieId, (result) => {
            this.setState({
                comments: result.data
            });
        });
    }

    renderCommentList() {

        return(
            this.state.comments.map((comment) => (
                <MovieComment comment={comment} key={comment._id} removeComment={this.removeComment.bind(this)}/>
            ))
        );
    }

    addComment(body, id) {
        let data = {
            'body': body,
            'movieId': id
        };

        addComment(data, (result) => {
            this.fetchComments();
        });
    }

    removeComment(id) {

        removeComment(id, (result) => {
            this.fetchComments();
        });
    }

    render() {
        return(
            <div className="movie__comments col-md-12">
                <h3>User comments</h3>
                {this.state.comments.length >= 1
                    ? this.renderCommentList()
                    : <p>Whoops, looks like no comments here yet. Why not leave one?</p>}
                <CommentForm addComment={this.addComment.bind(this)} movieId={this.props.movieId}/>
            </div>
        );
    }
}
