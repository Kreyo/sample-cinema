import React from 'react';
import {Header} from '../parts/header';
import {register} from './user-api';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            error: '',
            success: false
        }
    }

    setEmail(event) {
        this.setState({
            email : event.target.value
        });
    }

    setPassword(event) {
        this.setState({
            password : event.target.value
        });
    }

    setPasswordRepeat(event) {
        this.setState({
            passwordRepeat : event.target.value
        });
    }

    register(event) {
        event.preventDefault();
        this.setState({
            error: ''
        });

        if (this.state.password != this.state.passwordRepeat) {
            this.setState({
                error: 'Passwords must match!'
            });
        } else {
           this.postRegisterData();
        }
    }

    postRegisterData() {
        const data =  {
            'email': this.state.email,
            'password': this.state.password
        };
        register(
            data,
            (result) => {
                this.setState({
                    success: true
                });
            },
            (error) => {
                this.setState({
                    error: data.responseText
                });
            }
        );
    }

    render() {
        return(
            <div className="login">
                <Header/>
                <div className="container static__container">
                    {this.state.error != '' ? <div className="alert alert-danger">{this.state.error}</div> : ''}
                    {this.state.success ?  <div className="alert alert-success">You can now login using your credentials!</div> : '' }
                    <form className="form__signin" onSubmit={this.register.bind(this)}>
                        <h1 className="form__signin__heading">Sign up</h1>
                        <label className="sr-only">Email address</label>
                        <input id="inputEmail" className="form-control" placeholder="Email address" required="" type="email"
                               onChange={this.setEmail.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPassword" className="form-control" placeholder="Password" required="" type="password"
                               onChange={this.setPassword.bind(this)}/>
                        <label className="sr-only">Password</label>
                        <input id="inputPasswordRepeat" className="form-control" placeholder="Repeat password" required="" type="password"
                               onChange={this.setPasswordRepeat.bind(this)}/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}
