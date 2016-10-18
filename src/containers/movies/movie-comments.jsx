import { connect } from 'react-redux'
import { setComments } from '../../actions/movie/comment-list'
import {MovieComments} from '../../components/movies/movie-comments'


const mapStateToProps = (state) => {

    return {
        comments: state.cinemaApp.commentListState.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setComments: (comments) => dispatch(setComments(comments))
    };
};

export const CommentListState = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieComments);
