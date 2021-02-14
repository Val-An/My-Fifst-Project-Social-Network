import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div>
                <img className={style.profileImg}
                     src="https://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png"
                     alt=""/>
            </div>
            <div className={style.profileMain}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Profile;