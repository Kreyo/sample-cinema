import axios from 'axios';

const loginURL = '/api/user/login';
const registerURL = '/api/user/register';
const profileURL = '/api/user/profile';
const likeURL = '/api/user/movie-like';
const unlikeURL = '/api/user/movie-unlike';
const favoritesUrl = '/api/user/user-favorites';

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

export const like = (data, callback) => {
    console.log(data);
    axios.post(likeURL, data).then((result) => {
        callback(result);
    });
};


export const unlike = (data, callback) => {
    axios.post(unlikeURL, data).then((result) => {
        callback(result);
    });
};

export const favorites = (callback) => {
    axios.get(favoritesUrl).then((result) => {
        callback(result);
    });
};