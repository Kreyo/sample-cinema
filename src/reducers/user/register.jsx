export const registerState = (state = {error: '', email: '', password: '', passwordRepeat: '', success: false}, action) => {
    switch (action.type) {
        case 'REGISTER_STATE_FAILED':
            return Object.assign({}, state, {
                error: action.error
            });
        case 'REGISTER_STATE_DEFAULT':
            return Object.assign({}, state, {
                error: ''
            });

        case 'REGISTER_EMAIL':
            return Object.assign({}, state, {
                email: action.email
            });

        case 'REGISTER_PASSWORD':
            return Object.assign({}, state, {
                password: action.password
            });
        case 'REGISTER_PASSWORD_REPEAT':
            return Object.assign({}, state, {
                passwordRepeat: action.passwordRepeat
            });

        case 'REGISTER_SUCCESS':
            return Object.assign({}, state, {
                success: action.success
            });

        default:
            return state;
    }
};