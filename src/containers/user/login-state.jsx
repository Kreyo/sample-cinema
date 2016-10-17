import { connect } from 'react-redux'
import { setLoginState, setLoginEmail, setLoginPassword } from '../../actions'
import {Login} from '../../components/user/login'
import { browserHistory } from "react-router"
import {login} from '../../components/user/user-api'

const getLoginState = (state) => {
    return state.loginFailed;
};

const getEmail = (state) => {
    return state.email;
};

const getPassword = (state) => {
    return state.password;
};

const mapStateToProps = (state) => {
    return {
        email: getEmail(state),
        password: getPassword(state),
        loginFailed: getLoginState(state),
    }
};

const loginSubmit = (event) => {
    event.preventDefault();
    const data = {
        'email': this.state.email,
        'password': this.state.password
    };

    login(
        data,
        (result) => {
            browserHistory.push('/');
        },
        (error) => {
            dispatch(setLoginState(false));
        }
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (event) => dispatch(setLoginEmail( event.target.value)),
        setPassword: (event) => dispatch(setLoginPassword( event.target.value)),
        loginSubmit: loginSubmit
    };
};

export const LoginState = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
