import axios from 'axios';

const MovieListURL = '/api/home/movie-list';
const MovieDetailsURL = '/api/details/';
const MovieComments = '/api/details/comments';

export class MovieApi {

    getMoviesList(callback) {

        axios.get(MovieListURL)
            .then((result) => {
                callback(result);
            }).catch(function (error) {
            console.log(error);
        });
    }

    getCommentList(id, callback) {

        axios.get( MovieComments + '/' + id )
            .then((result) => {
                callback(result);
            }).catch(function (error) {
            console.log(error);
        });
    }

    addComment(data, callback) {
        axios.post(MovieComments, data)
            .then((result) => {
                callback(result);
            });
    }

    getMovieDetails(id, callback) {
        axios.get(MovieDetailsURL+id)
            .then((result) => {
                callback(result);
            });
    }
}