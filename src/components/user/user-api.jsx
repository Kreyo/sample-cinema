import axios from 'axios';

const loginURL = '/api/user/login';
const registerURL = '/api/user/register';

export class UserApi {

    login(data, successCallback, errorCallback) {

        axios.post(loginURL, data)
            .then((result) => {
                successCallback(result);
            })
            .catch( (error) => {
                errorCallback(error);
            });
    }

    register(data, successCallback, errorCallback) {

        axios.post(registerURL, data)
            .then((result) => {
                successCallback(result);
            })
            .catch((error) => {
                errorCallback(error);
            });
    }
}
