import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk, getUserStatusThunk, updateStatusThunk} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){userId = this.props.autorizedUserId}
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
        this.props.updateStatusThunk();
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusThunk={this.props.updateStatusThunk}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose (
    connect (mapStateToProps, {getUserProfileThunk, getUserStatusThunk, updateStatusThunk}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// const ProfileContainerWithRouter = withRouter (AuthRedirectComponent);
//
// export default connect (mapStateToProps, {getUserProfileThunk})(ProfileContainerWithRouter);