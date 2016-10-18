export const setRegisterError = (error) => {
    let type = error == '' ? 'REGISTER_STATE_DEFAULT': 'REGISTER_STATE_FAILED';
    return {
        type: type,
        error
    }
};

export const setRegisterEmail = (email) => {
    return {
        type: 'REGISTER_EMAIL',
        email
    }
};

export const setRegisterPassword = (password) => {
    return {
        type: 'REGISTER_PASSWORD',
        password
    }
};

export const setRegisterPasswordRepeat = (passwordRepeat) => {
    return {
        type: 'REGISTER_PASSWORD_REPEAT',
        passwordRepeat
    }
};


export const setRegisterSuccess = (success) => {
    return {
        type: 'REGISTER_SUCCESS',
        success
    }
};
