import React from 'react';
import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    unfollowThunk
} from "../../Redux/userReducer";
import Friends from "./Friends";
import Preloader from "../Common/Preloader/Preloader";


class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageChanget = (p) => {
        this.props.getUsersThunk(this.props.pageSize, p);
        this.props.setCurrentPage(p);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends userList={this.props.userList}
                         onPageChanget={this.onPageChanget}
                         currentPage={this.props.currentPage}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         unfollowThunk={this.props.unfollowThunk}
                         followThunk={this.props.followThunk}
                         pageNav={this.props.pageNav}
                         setCurrentPage={this.props.setCurrentPage}
                         followingInProgress={this.props.followingInProgress}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}/>

            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userList: state.userList.userList,
        pageSize: state.userList.pageSize,
        totalUsersCount: state.userList.totalUsersCount,
        currentPage: state.userList.currentPage,
        isFetching: state.userList.isFetching,
        followingInProgress: state.userList.followingInProgress
    }
}

const FriendsContainer = connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsersThunk
})(FriendsAPIComponent)

export default FriendsContainer;