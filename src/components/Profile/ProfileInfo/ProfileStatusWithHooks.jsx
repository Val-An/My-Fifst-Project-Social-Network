import React, {useState} from 'react';
// import style from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span><b>Status: </b></span><span
                onDoubleClick={activateEditMode}>{props.status || "*****"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}  onBlur={deactivateEditMode} type="text"  autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;