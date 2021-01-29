import React from 'react';
import style from './Friends.module.css';
import * as axios from "axios";
import userLogo from "../../img/user_logo.png"


class Friends extends React.Component {

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

        let pagesCount = Math.ceil( this.props.userList.totalUsersCount / this.props.userList.pageSize );

        let pages = [];
        for(let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            <div>
                <div className={style.usersPages}>
                    {pages.map( p => {
                       return (
                           <span className={this.props.userList.currentPage === p && style.selectedPage}
                                 onClick={() => {this.onPageChanget (p)}}>{p} </span>
                       )
                    })}
                </div>
                {
                    this.props.userList.userList.map(user => <div key={user.id}>
                    <span>
                        <div><img className={style.avatarImg}
                                  src={user.photos.small != null ? user.photos.small : userLogo} alt=""/></div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}


export default Friends;