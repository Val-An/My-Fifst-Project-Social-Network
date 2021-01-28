import React from 'react';
import style from './Friends.module.css';
import * as axios from "axios";
import userLogo from "../../img/user_logo.png"


class Friends extends React.Component {

    constructor(props){
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>
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