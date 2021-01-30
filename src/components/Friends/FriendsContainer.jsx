import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/userReducer";
import Friends from "./Friends";
import * as axios from "axios";

class FriendsAPIComponent extends React.Component {

    componentDidMount(){

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.userList.pageSize}&page=${this.props.userList.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanget = (p) => {
        this.props.setCurrentPage(p);
        this.componentDidMount(this.props.userList.currentPage = p);
    }


    render() {
        return <Friends userList={this.props.userList}
                        onPageChanget={this.onPageChanget}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        userList: state.userList,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount,
        currentPage: state.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIComponent)

export default FriendsContainer;