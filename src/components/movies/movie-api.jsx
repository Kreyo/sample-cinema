import axios from 'axios';

const MovieListURL = '/api/home/movie-list';
const MovieDetailsURL = '/api/details/';
const MovieComments = '/api/details/comments';

export const getMoviesList = (callback) => {

    axios.get(MovieListURL)
        .then((result) => {
            callback(result);
        }).catch(function (error) {
        console.log(error);
    });
};

export const getCommentList = (id, callback) => {

    axios.get( MovieComments + '/' + id )
        .then((result) => {
            callback(result);
        }).catch(function (error) {
        console.log(error);
    });
};

export const addComment = (data, callback)  => {
    axios.post(MovieComments, data)
        .then((result) => {
            callback(result);
        });
};

export const removeComment = (id, callback) => {
    axios.delete(MovieComments  + '/' + id)
        .then((result) => {
            callback(result);
        });
};

export const getMovieDetails = (id, callback) => {
    axios.get(MovieDetailsURL+id)
        .then((result) => {
            callback(result);
        });
};