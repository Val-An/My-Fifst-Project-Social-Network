import React from "react";
import style from "./FriendsOnline.module.css";

const FriendsOnline = (props) => {

    const FriendsOnlineItem = (props) => {

        // if(props.status == 'online'){
            return (
                <div className={style.friendsOnlineItem}>
                    <div>
                        <img className={style.userAvatar} src={props.avatar} alt=""/>
                        <div className={style.name}>
                            {props.name}
                        </div>
                    </div>

                </div>
            )
        // }
    }

    const friendOnline = props.state.userList.map(el => <FriendsOnlineItem id={el.id}
                                                                  name={el.name}
                                                                  avatar={el.avatar}
                                                                  status={el.status}/>
    )


    return (
        <div className={style.friendsOnline}>
            <div className={style.headText}>
                Friends Online
            </div>
            <div>
                {friendOnline}
            </div>
        </div>
    )
}

export default FriendsOnline;