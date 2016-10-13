import React from 'react';
import axios from 'axios';
import {MovieComment} from './movie-comment';
import {CommentForm} from './movie-add-comment';

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
        axios.get(this.props.source)
            .then((result) => {
                this.setState({
                    comments: result.data
                });
            }).catch(function (error) {
            console.log(error);
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
        axios.post('/api/details/comments',
            {
                'body': body,
                'movieId': id
            })
            .then((result) => {
                this.fetchComments();
            });
    }

    render() {
        return(
            <div className="movie-comments col-md-12">
                <h3>User comments</h3>
                {this.state.comments.length >= 1
                    ? this.renderCommentList()
                    : <p>Whoops, looks like no comments here yet. Why not leave one?</p>}
                <CommentForm addComment={this.addComment.bind(this)} movieId={this.props.movieId}/>
            </div>
        );
    }
}
