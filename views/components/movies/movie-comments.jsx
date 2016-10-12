import React from 'react';
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
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                comments: result
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    renderCommentList() {
        if (this.state.comments.length >= 1) {
            return(
                this.state.comments.map((comment) => (
                    <MovieComment comment={comment} key={comment._id}/>
                ))
            );
        } else {
            return(

                <p>Whoops, looks like no comments here yet. Why not leave one?</p>
            );
        }
    }

    render() {
        return(
            <div className="movie-comments col-md-12">
                <h3>User comments</h3>
                {this.renderCommentList()}
                <CommentForm/>
            </div>
        );
    }
}
