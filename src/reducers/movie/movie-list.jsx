export const movieListState = (state = {movies: []}, action) => {
    switch (action.type) {
        case 'MOVIES_FETCHED':
            return Object.assign({}, state, {
                movies: action.movies
            });

        default:
            return state;
    }
};