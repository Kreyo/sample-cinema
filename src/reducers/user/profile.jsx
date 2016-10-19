export const profileState = (state = {profile: [], favorites: []}, action) => {
    switch (action.type) {
        case 'PROFILE_FETCHED':
            return Object.assign({}, state, {
                profile: action.profile
            });

        case 'FAVORITES_FETCHED':
            return Object.assign({}, state, {
                favorites: action.favorites
            });
        default:
            return state;
    }
};