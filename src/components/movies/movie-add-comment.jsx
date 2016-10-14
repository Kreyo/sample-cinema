import React from 'react';
import { Link } from "react-router"
import {getCookie} from '../utility/services';

export class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentBody: ''
        }
    }

    setBody(event) {
        this.setState({
            commentBody : event.target.value
        });
    }

    addComment(event) {
        event.preventDefault();

        if (this.state.commentBody != '') {
            this.props.addComment(this.state.commentBody, this.props.movieId);

            this.setState({
                commentBody: ''
            });
        }
    }

    renderForm() {
        return (
            <form className="form__comment" onSubmit={this.addComment.bind(this)}>
                    <textarea id="inputBody" className="form-control"
                              placeholder="Enter your comment here.." required="" onChange={this.setBody.bind(this)}></textarea>
                <button className="btn btn-lg btn-primary btn-block" type="submit" >Comment</button>
            </form>
        );
    }

    render() {
        return(
            <div className="form__comment">
                <h3>Add your comment</h3>
                {getCookie('email') ?
                    this.renderForm() :
                    <p>You must <Link to={`/login`}>login</Link> to leave comments!</p>}
            </div>
        );
    }
}
