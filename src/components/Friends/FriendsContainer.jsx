import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/userReducer";
import Friends from "./Friends";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";


class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
            {withCredentials: true}
            )
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanget = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
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
                         unfollow={this.props.unfollow}
                         follow={this.props.follow}
                         pageNav={this.props.pageNav}
                         setCurrentPage={this.props.setCurrentPage}/>

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
        isFetching: state.userList.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

const FriendsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(FriendsAPIComponent)

export default FriendsContainer;