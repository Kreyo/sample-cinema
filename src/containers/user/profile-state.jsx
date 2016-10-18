import { connect } from 'react-redux'
import { setProfile } from '../../actions/user/profile'
import {UserProfile} from '../../components/user/profile'


const mapStateToProps = (state) => {

    return {
        profile: state.cinemaApp.profileState.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => dispatch(setProfile(profile))
    };
};

export const ProfileState = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
