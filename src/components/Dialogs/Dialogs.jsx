import React from 'react';
import style from './Dialogs.module.css';






const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {props.dialogDataMap}
            </div>
            <div className={style.messages}>
                {props.messagesDataMap}
            </div>
        </div>
    );
}

export default Dialogs;