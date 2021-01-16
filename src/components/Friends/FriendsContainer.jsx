import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/userReducer";

let mapStateToProps = (state) => {
    return {
        userList: state.userList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;