import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import noAvatar from "../../../img/noAvatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = ({profile, status, updateStatusThunk, isOwner, savePhoto, ...props}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        debugger
        if (e.target.files.length){
           savePhoto (e.target.files[0])
        }
    }

    return (
        <div className={style.profileInfo}>
            {/*avatar*/}
            <div className={style.profileAvatar}>
                {profile.photos.large != null
                    ? <img src={profile.photos.large} className={style.profileAvatarImg} alt=""/>
                    : <img src={noAvatar} className={style.profileAvatarImg} alt=""/>}
                <div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
            {/*status*/}
            <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
            {/*fullName*/}
            <div>
                <p><strong>Full Name:</strong> {profile.fullName}</p>
            </div>
            {/*about*/}
            <div>
                {profile.aboutMe != null ?
                <p><strong>About Me:</strong> {profile.aboutMe}</p> : ''}
            </div>
            {/*social*/}
            <div>
                {/*{social("facebook", "Facebook", props)}*/}
                {profile.contacts.facebook != null ?
                    <a href={profile.contacts.facebook}><strong>Facebook</strong></a> : ''}
            </div>
            <div>
                {/*{social("website", "Website", props)}*/}
                {profile.contacts.website != null ?
                    <a href={profile.contacts.website}><strong>Website</strong></a> : ''}
            </div>
            <div>
                {profile.contacts.vk != null ? <a href={profile.contacts.vk}><strong>VK</strong></a> : ''}
            </div>
            <div>
                {profile.contacts.twitter != null ?
                    <a href={profile.contacts.twitter}><strong>Twitter</strong></a> : ''}
            </div>
            <div>
                {profile.contacts.instagram != null ?
                    <a href={profile.contacts.instagram}><strong>Instagram</strong></a> : ''}
            </div>
            <div>
                {profile.contacts.youtube != null ?
                    <a href={profile.contacts.youtube}><strong>YouTube</strong></a> : ''}
            </div>
            <div>
                {profile.contacts.github != null ?
                    <a href={profile.contacts.github}><strong>GitHub</strong></a> : ''}
            </div>
            <div>
                {profile.contacts.mainLink != null ?
                    <a href={profile.contacts.mainLink}><strong>MainLink</strong></a> : ''}
            </div>
            {/*lookingForAJob*/}
            <div>
                {profile.lookingForAJob !== false ?
                    <p><strong>Looking For A Job:</strong> {profile.lookingForAJobDescription}</p> : ''}
            </div>
        </div>
    );
}

export default ProfileInfo;