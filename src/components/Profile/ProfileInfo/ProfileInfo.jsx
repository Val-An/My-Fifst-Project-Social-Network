import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import noAvatar from "../../../img/noAvatar.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {

    /*const social = (link, text, props) => {
        debugger
        return  (
            props.profile.contacts.link != null ?
                <a href={props.profile.contacts.link}><strong>text</strong></a> : ''
        )
    }*/

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profileInfo}>
            {/*avatar*/}
            <div className={style.profileAvatar}>
                {props.profile.photos.large != null ?
                <img src={props.profile.photos.large} className={style.profileAvatarImg} alt=""/> :
                    <img src={noAvatar} className={style.profileAvatarImg} alt=""/>}
            </div>
            {/*status*/}
            <ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            {/*fullName*/}
            <div>
                <p><strong>Full Name:</strong> {props.profile.fullName}</p>
            </div>
            {/*about*/}
            <div>
                {props.profile.aboutMe != null ?
                <p><strong>About Me:</strong> {props.profile.aboutMe}</p> : ''}
            </div>
            {/*social*/}
            <div>
                {/*{social("facebook", "Facebook", props)}*/}
                {props.profile.contacts.facebook != null ?
                    <a href={props.profile.contacts.facebook}><strong>Facebook</strong></a> : ''}
            </div>
            <div>
                {/*{social("website", "Website", props)}*/}
                {props.profile.contacts.website != null ?
                    <a href={props.profile.contacts.website}><strong>Website</strong></a> : ''}
            </div>
            <div>
                {props.profile.contacts.vk != null ? <a href={props.profile.contacts.vk}><strong>VK</strong></a> : ''}
            </div>
            <div>
                {props.profile.contacts.twitter != null ?
                    <a href={props.profile.contacts.twitter}><strong>Twitter</strong></a> : ''}
            </div>
            <div>
                {props.profile.contacts.instagram != null ?
                    <a href={props.profile.contacts.instagram}><strong>Instagram</strong></a> : ''}
            </div>
            <div>
                {props.profile.contacts.youtube != null ?
                    <a href={props.profile.contacts.youtube}><strong>YouTube</strong></a> : ''}
            </div>
            <div>
                {props.profile.contacts.github != null ?
                    <a href={props.profile.contacts.github}><strong>GitHub</strong></a> : ''}
            </div>
            <div>
                {props.profile.contacts.mainLink != null ?
                    <a href={props.profile.contacts.mainLink}><strong>MainLink</strong></a> : ''}
            </div>
            {/*lookingForAJob*/}
            <div>
                {props.profile.lookingForAJob !== false ?
                    <p><strong>Looking For A Job:</strong> {props.profile.lookingForAJobDescription}</p> : ''}
            </div>
        </div>
    );
}

export default ProfileInfo;