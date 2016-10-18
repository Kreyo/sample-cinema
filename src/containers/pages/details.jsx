import { connect } from 'react-redux'
import { setMovie } from '../../actions/movie/movie-details'
import {Details} from '../../components/pages/details'


const mapStateToProps = (state) => {

    return {
        movie: state.cinemaApp.movieDetailsState.movie
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovie: (movie) => dispatch(setMovie(movie))
    };
};

export const MovieDetailsState = connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
