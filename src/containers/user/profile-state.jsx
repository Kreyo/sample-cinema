import { connect } from 'react-redux'
import { setProfile, setFavorites } from '../../actions/user/profile'
import {UserProfile} from '../../components/user/profile'


const mapStateToProps = (state) => {

    return {
        profile: state.cinemaApp.profileState.profile,
        favorites: state.cinemaApp.profileState.favorites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => dispatch(setProfile(profile)),
        setFavorites: (favorites) => dispatch(setFavorites(favorites))
    };
};

export const ProfileState = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
