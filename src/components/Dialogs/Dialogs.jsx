import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    const DialogItem = (props) => {
        return (
            <div>
                <img src={'../../Redux/img/' + props.avatar} alt=""/>
                <NavLink to={'/dialogs/' + props.id}
                         activeClassName={style.active}>{props.name}</NavLink>
            </div>
        )
    }

    const Message = (props) => {
        return (
            <div className="message">{props.message}</div>
        )
    }

    let dialog = props.state.dialogData.map(name => <DialogItem name={name.name}
                                                                id={name.id}
                                                                avatar={name.avatar}/>)

    let messages = props.state.messagesData.map(message => <Message
        message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialog}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;