import React from 'react';
import style from './Friends.module.css';
import userLogo from "../../img/user_logo.png"
import {NavLink} from "react-router-dom";


const Friends = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let pages = [];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    const pageNav = () => {
        return  (
            <div className={style.pageNav}>
                <button onClick={() => {props.onPageChanget(props.currentPage - 1)}}>Prev</button>
                {props.currentPage}
                <button onClick={() => {props.onPageChanget(props.currentPage + 1)}}>Next</button>
            </div>
        )
    }

    return (
        <div>
            {pageNav (props.currentPage)}
            {
                props.userList.map(user => <div className={style.users} key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={style.avatarImg}
                                     src={user.photos.small != null ? user.photos.small : userLogo} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
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
            {pageNav (props.currentPage)}
            <div className={style.usersPages}>
                {pages.map( (p) => {
                    return (
                        <span className={props.currentPage === p && style.selectedPage}
                              onClick={() => {
                                  props.onPageChanget(p)
                              }}>{p} </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Friends;