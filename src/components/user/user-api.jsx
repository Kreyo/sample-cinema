import axios from 'axios';

const loginURL = '/api/user/login';
const registerURL = '/api/user/register';
const profileURL = '/api/user/profile';

export const register = (data, successCallback, errorCallback) => {

    axios.post(registerURL, data)
        .then((result) => {
            successCallback(result);
        })
        .catch((error) => {
            errorCallback(error);
        });
};

export const login = (data, successCallback, errorCallback) => {

    axios.post(loginURL, data)
        .then((result) => {
            successCallback(result);
        })
        .catch((error) => {
            errorCallback(error);
        });
};

export const profile = (email, callback) => {
    axios.get(profileURL + '?email=' + email)
        .then((result) => {
            callback(result);
        });
};