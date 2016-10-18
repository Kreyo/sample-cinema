import { connect } from 'react-redux'
import { setCommentBody } from '../../actions/movie/add-comment'
import {CommentForm} from '../../components/movies/movie-add-comment'


const mapStateToProps = (state) => {

    return {
        commentBody: state.cinemaApp.addCommentState.commentBody
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCommentBody: (commentBody) => dispatch(setCommentBody(commentBody))
    };
};

export const AddCommentState = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);
