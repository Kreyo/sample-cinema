import { combineReducers } from 'redux';
import {loginState} from './user/login';
import {registerState} from './user/register';
import {movieListState} from './movie/movie-list';
import {movieDetailsState} from './movie/movie-details';
import {commentListState} from './movie/comment-list';
import {addCommentState} from './movie/add-comment';

export const cinemaApp = combineReducers({
    loginState,
    registerState,
    movieListState,
    movieDetailsState,
    commentListState,
    addCommentState
});
