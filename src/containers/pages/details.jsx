import { connect } from 'react-redux'
import { setMovie, setFavorite } from '../../actions/movie/movie-details'
import {Details} from '../../components/pages/details'


const mapStateToProps = (state) => {

    return {
        movie: state.cinemaApp.movieDetailsState.movie,
        favorite: state.cinemaApp.movieDetailsState.favorite
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovie: (movie) => dispatch(setMovie(movie)),
        setFavorite: (favorite) => dispatch(setFavorite(favorite))
    };
};

export const MovieDetailsState = connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
