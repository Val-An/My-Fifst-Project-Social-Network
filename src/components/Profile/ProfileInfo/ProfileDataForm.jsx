import React from "react";
import {CreateField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../Common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                {error && <span className={style.formSummaryError}>{error}</span>}
            </div>
            {/*fullName*/}
            <div>
                <p><strong>Full Name:</strong> {CreateField("text", "Full name", "fullName",
                    Input, [])}</p>
            </div>
            {/*about me*/}
            <div>
                <p><strong>About me:</strong> </p>
                {CreateField("", "About me", "aboutMe", Textarea, [])}
            </div>
            {/*social*/}
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key} : {CreateField("text", key, "contacts." + key,
                        Input, [])}</b>
                </div>
            })}
            </div>
            {/*lookingForAJob*/}
            <div>
                <p><strong>Looking For A Job:</strong></p>
                {CreateField("checkbox", "", "lookingForAJob",
                    Input, [])}
            </div>
            <div>
                <p><strong>My professional skills:</strong> </p>
                {CreateField("", "My professional skills", "lookingForAJobDescription",
                    Textarea, [])}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm