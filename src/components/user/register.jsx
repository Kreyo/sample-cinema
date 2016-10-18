import React from 'react';
import {Header} from '../parts/header';
import {register} from './user-api';

export class Register extends React.Component {

    register(event) {
        event.preventDefault();
        this.props.registerSubmit('');

        if (this.props.password != this.props.passwordRepeat) {
            this.setState({
                error: 'Passwords must match!'
            });
        } else {
           this.postRegisterData();
        }
    }

    postRegisterData() {
        const data =  {
            'email': this.props.email,
            'password': this.props.password,
            'favorites': []
        };
        register(
            data,
            (result) => {
                this.props.setSuccess(true);
            },
            (error) => {
                this.props.registerSubmit(data.responseText);
            }
        );
    }

    render() {
        return(
            <div className="login">
                <Header/>
                <div className="container static__container">
                    {this.props.error != '' ? <div className="alert alert-danger">{this.props.error}</div> : ''}
                    {this.props.success ?  <div className="alert alert-success">You can now login using your credentials!</div> : '' }
                    <form className="form__signin" onSubmit={this.register.bind(this)}>
                        <h1 className="form__signin__heading">Sign up</h1>
                        <label className="sr-only">Email address</label>
                        <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email"
                               onChange={this.props.setEmail.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"
                               onChange={this.props.setPassword.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPasswordRepeat" className="form-control" placeholder="Repeat password" required="" type="password"
                               onChange={this.props.setPasswordRepeat.bind(this)}/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}
