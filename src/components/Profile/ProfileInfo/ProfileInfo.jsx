import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div className={style.profileInfo}>
            {/*avatar*/}
            <div>
                <img src={props.profile.photos.large} className={style.profileAvatar} alt=""/>
            </div>
            {/*fullName*/}
            <div>
                <p>{props.profile.fullName}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;