import { connect } from 'react-redux'
import { setLoginState, setLoginEmail, setLoginPassword } from '../../actions/user/login'
import {Login} from '../../components/user/login'


const mapStateToProps = (state) => {

    return {
        email: state.cinemaApp.loginState.email,
        password: state.cinemaApp.loginState.password,
        loginFailed: state.cinemaApp.loginState.loginFailed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (event) => dispatch(setLoginEmail(event.target.value)),
        setPassword: (event) => dispatch(setLoginPassword(event.target.value)),
        loginSubmit: (success) =>  dispatch(setLoginState(success))
    };
};

export const LoginState = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
