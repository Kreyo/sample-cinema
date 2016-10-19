export const setProfile = (profile) => {
    return {
        type: 'PROFILE_FETCHED',
        profile
    }
};

export const setFavorites = (favorites) => {
    return {
        type: 'FAVORITES_FETCHED',
        favorites
    }
};