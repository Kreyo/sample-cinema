export const commentListState = (state = {comments: []}, action) => {
    switch (action.type) {
        case 'COMMENTS_FETCHED':
            return Object.assign({}, state, {
                comments: action.comments
            });

        default:
            return state;
    }
};