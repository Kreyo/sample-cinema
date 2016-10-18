export const profileState = (state = {profile: []}, action) => {
    switch (action.type) {
        case 'PROFILE_FETCHED':
            return Object.assign({}, state, {
                profile: action.profile
            });
        default:
            return state;
    }
};