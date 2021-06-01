import React from 'react';
import style from './Friends.module.css';
import userLogo from "../../img/user_logo.png"
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import PageNav from "../Common/Paginator/PageNavigator";


const Friends = ({currentPage, onPageChanget, totalUsersCount, pageSize, userList, ...props}) => {

    const pageNav = <PageNav currentPage={currentPage} onPageChanget={onPageChanget}/>

    return (
        <div>
            <div>
                {pageNav}
            </div>
            {
                userList.map(user => <div className={style.users} key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={style.avatarImg}
                                     src={user.photos.small != null ? user.photos.small : userLogo} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollowThunk(user.id);
                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.followThunk(user.id);
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
            <div>
                {pageNav}
            </div>
            <Paginator currentPage={currentPage}
                       onPageChanget={onPageChanget}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
    )
}

export default Friends;