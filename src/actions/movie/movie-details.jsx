export const setMovie = (movie) => {
    return {
        type: 'MOVIE_FETCHED',
        movie
    }
};

export const setFavorite = (favorite) => {
    return {
        type: 'MOVIE_FAVORITE',
        favorite
    }
};

