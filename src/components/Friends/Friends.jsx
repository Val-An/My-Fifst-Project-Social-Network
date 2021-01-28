import React from 'react';
import style from './Friends.module.css';
import * as axios from "axios";
import userLogo from "../../img/user_logo.png"
import icon_m_01 from "../../Redux/img/icon_m_01.png";
import icon_m_02 from "../../Redux/img/icon_m_02.png";
import icon_m_03 from "../../Redux/img/icon_m_03.png";
import icon_m_04 from "../../Redux/img/icon_m_04.png";
import icon_f_01 from "../../Redux/img/icon_f_01.png";
import icon_f_02 from "../../Redux/img/icon_f_02.png";
import icon_f_03 from "../../Redux/img/icon_f_03.png";
import icon_f_04 from "../../Redux/img/icon_f_04.png";


const Friends = (props) => {

    if (props.userList.userList.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    return (
        <div>
            {
                props.userList.userList.map(user => <div key={user.id}>
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
    );
}

export default Friends;