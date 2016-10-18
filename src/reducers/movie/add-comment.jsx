export const addCommentState = (state = {commentBody: ''}, action) => {
    switch (action.type) {
        case 'COMMENT_BODY':
            return Object.assign({}, state, {
                commentBody: action.commentBody
            });

        default:
            return state;
    }
};