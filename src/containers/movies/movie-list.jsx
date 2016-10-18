import { connect } from 'react-redux'
import { setMovies } from '../../actions/movie/movie-list'
import {MovieList} from '../../components/movies/movie-list'


const mapStateToProps = (state) => {

    return {
        movies: state.cinemaApp.movieListState.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => dispatch(setMovies(movies))
    };
};

export const MovieListState = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);
