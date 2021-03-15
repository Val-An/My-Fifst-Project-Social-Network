import React from 'react';
import Profile from "./Profile";
import {profileThunk, setUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){userId = 2}
        this.props.profileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const ProfileContainerWithRouter = withRouter (ProfileContainer);

export default connect (mapStateToProps, {setUserProfile, profileThunk})(ProfileContainerWithRouter);