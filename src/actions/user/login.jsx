export const setLoginState = (success) => {
    let type = success ? 'LOGIN_STATE_DEFAULT': 'LOGIN_STATE_FAILED';
    return {
        type: type,
        success
    }
};

export const setLoginEmail = (email) => {
    return {
        type: 'LOGIN_EMAIL',
        email
    }
};

export const setLoginPassword = (password) => {
    return {
        type: 'LOGIN_PASSWORD',
        password
    }
};

