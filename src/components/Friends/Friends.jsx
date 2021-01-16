import React from 'react';
import style from './Friends.module.css';


const Friends = (props) => {
    debugger
    return (
        <div>
            {
                props.userList.userList.map( user => <div key={user.id}>
                    <span>
                        <div><img className={style.avatarImg} src={user.avatar} alt=""/></div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => {props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={ () => {props.follow(user.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Friends;