import React from 'react';
import moment from "moment";

export class MovieComment extends React.Component {

    render() {
        return(
            <div className="comment">
                <em>{this.props.comment.user} commented {moment(this.props.comment.date).fromNow()} :</em><p>{this.props.comment.body}</p>
            </div>
        );
    }
}
