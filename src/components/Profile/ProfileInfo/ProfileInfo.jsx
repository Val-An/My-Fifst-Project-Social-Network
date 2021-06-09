import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import noAvatar from "../../../img/noAvatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatusThunk, isOwner, savePhoto, saveProfile, ...props}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        debugger
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
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
            <div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
            {/*status*/}
            <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>

        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
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
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
            {/*lookingForAJob*/}
            <div>
                {profile.lookingForAJob !== false ?
                    <p><strong>Looking For A Job:</strong> {profile.lookingForAJobDescription}</p>
                    : <p><strong>Looking For A Job:</strong> No</p>}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}>
        <a href={contactValue}><strong>{contactTitle}</strong></a>
    </div>
}

export default ProfileInfo;