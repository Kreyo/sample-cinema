import React from 'react';
import {MovieComment} from './movie-comment';
import {AddCommentState} from '../../containers/movies/movie-add-comment';
import {getCommentList, addComment, removeComment} from './movie-api';

export class MovieComments extends React.Component {

    componentDidMount() {
        this.fetchComments();
        var socket = io.connect(this.props.location);
        socket.on('comments:updated', (data) => {
            if (data.movieId == this.props.movieId) {
                this.fetchComments();
            }
        });
    }

    fetchComments() {

        getCommentList(this.props.movieId, (result) => {
            this.props.setComments(result.data);
        });
    }

    renderCommentList() {

        return(
            this.props.comments.map((comment) => (
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
            var socket = io.connect(this.props.location);
            socket.emit('comment:removed', {
                movieId: this.props.movieId
            });
        });
    }

    render() {
        return(
            <div className="movie__comments col-md-12">
                <h3>User comments</h3>
                {this.props.comments.length >= 1
                    ? this.renderCommentList()
                    : <p>Whoops, looks like no comments here yet. Why not leave one?</p>}
                <AddCommentState addComment={this.addComment.bind(this)} movieId={this.props.movieId}/>
            </div>
        );
    }
}
