import { connect } from 'react-redux'
import { setRegisterError, setRegisterEmail, setRegisterPassword, setRegisterPasswordRepeat, setRegisterSuccess } from '../../actions/user/register'
import {Register} from '../../components/user/register'


const mapStateToProps = (state) => {

    return {
        email: state.cinemaApp.registerState.email,
        password: state.cinemaApp.registerState.password,
        passwordRepeat: state.cinemaApp.registerState.passwordRepeat,
        error: state.cinemaApp.registerState.error,
        success: state.cinemaApp.registerState.success
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (event) => dispatch(setRegisterEmail(event.target.value)),
        setPassword: (event) => dispatch(setRegisterPassword(event.target.value)),
        setPasswordRepeat: (event) => dispatch(setRegisterPasswordRepeat(event.target.value)),
        registerSubmit: (error) =>  dispatch(setRegisterError(error)),
        setSuccess: (success) => dispatch(setRegisterSuccess(success))
    };
};

export const RegisterState = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
