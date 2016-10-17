export const loginState = (state = {loginFailed: false, email: '', password: ''}, action) => {
    switch (action.type) {
        case 'LOGIN_STATE_FAILED':
            return Object.assign({}, state, {
                loginFailed: true
            });
        case 'LOGIN_STATE_DEFAULT':
            return Object.assign({}, state, {
                loginFailed: false
            });

        case 'LOGIN_EMAIL':
            return Object.assign({}, state, {
                email: action.email
            });

        case 'LOGIN_PASSWORD':
            return Object.assign({}, state, {
                password: action.password
            });

        default:
            return state;
    }
};