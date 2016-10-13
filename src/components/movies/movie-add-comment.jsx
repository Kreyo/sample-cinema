import React from 'react';
import { Link } from "react-router"
export class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentBody: ''
        }
    }

    setBody(event) {
        this.setState({
            body : event.target.value
        });
    }

    addComment(event) {
        event.preventDefault();
        //add post request to /ajax-comment
    }

    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    renderForm() {
        if (this.getCookie('email')) {
            //validate if the cookie is OK
            return (
                <form className="form-comment" onSubmit={this.addComment.bind(this)}>
                    <textarea id="inputBody" className="form-control"
                              placeholder="Enter your comment here.." required="" onChange={this.setBody.bind(this)}></textarea>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" >Comment</button>
                </form>
            );

        } else {

            return(
                <p>You must <Link to={`/login`}>login</Link> to leave comments!</p>
            );
        }
    }


    render() {
        return(
            <div className="form-comment">
                <h3>Add your comment</h3>
                {this.renderForm()}
            </div>
        );
    }
}
