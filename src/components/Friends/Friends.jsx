import React from 'react';
import style from './Friends.module.css';
import userLogo from "../../img/user_logo.png"


const Friends = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let pages = [];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div>
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
            {
                props.userList.map(user => <div key={user.id}>
                    <span>
                        <div><img className={style.avatarImg}
                                  src={user.photos.small != null ? user.photos.small : userLogo} alt=""/></div>
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
        </div>
    )
}

export default Friends;