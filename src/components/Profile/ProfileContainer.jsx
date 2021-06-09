import React from 'react';
import Profile from "./Profile";
import {
    getUserProfileThunk,
    getUserStatusThunk,
    savePhoto,
    saveProfile,
    updateStatusThunk
} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
        this.props.updateStatusThunk();
}

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusThunk={this.props.updateStatusThunk}
                     savePhoto={this.props.savePhoto}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getUserStatusThunk, updateStatusThunk, savePhoto, saveProfile}),
    withRouter)(ProfileContainer)
