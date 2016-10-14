import React from 'react';
import moment from "moment";
import {getCookie} from '../utility/services';

export class MovieComment extends React.Component {

    removeComment(event) {
        event.preventDefault();

        this.props.removeComment(this.props.comment._id);
    }

    render() {
        return(
            <div className="comment">
                <em>{this.props.comment.user} commented {moment(this.props.comment.date).fromNow()} :</em>
                <p>{this.props.comment.body}</p>
                {decodeURIComponent(getCookie('email')) == this.props.comment.user ?
                    <a href="javascript:;" onClick={this.removeComment.bind(this)}>Remove comment</a> :
                    ''
                }
            </div>
        );
    }
}
