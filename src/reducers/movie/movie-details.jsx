export const movieDetailsState = (state = {movie: []}, action) => {
    switch (action.type) {
        case 'MOVIE_FETCHED':
            return Object.assign({}, state, {
                movie: action.movie
            });

        default:
            return state;
    }
};