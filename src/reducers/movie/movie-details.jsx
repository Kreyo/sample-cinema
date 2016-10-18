export const movieDetailsState = (state = {movie: [], favorite: false}, action) => {
    switch (action.type) {
        case 'MOVIE_FETCHED':
            return Object.assign({}, state, {
                movie: action.movie
            });

        case 'MOVIE_FAVORITE':
            return Object.assign({}, state, {
                favorite: action.favorite
            });

        default:
            return state;
    }
};