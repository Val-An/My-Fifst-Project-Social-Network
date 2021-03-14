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
import Preloader from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/api";


class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanget = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        getUsers(this.props.pageSize, p).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
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

const FriendsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(FriendsAPIComponent)

export default FriendsContainer;