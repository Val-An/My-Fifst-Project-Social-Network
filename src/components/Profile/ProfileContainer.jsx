import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){userId = 2}
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const ProfileContainerWithRouter = withRouter (AuthRedirectComponent);

export default connect (mapStateToProps, {getUserProfileThunk})(ProfileContainerWithRouter);