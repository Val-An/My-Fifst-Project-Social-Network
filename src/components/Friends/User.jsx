import React from 'react';
import style from './User.module.css';
import userLogo from "../../img/user_logo.png"
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollowThunk, followThunk,  ...props}) => {


    return (
        <div className={style.user}>
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
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollowThunk(user.id);
                                }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    followThunk(user.id);
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

export default User;