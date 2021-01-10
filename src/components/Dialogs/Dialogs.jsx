import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/state";


const Dialogs = (props) => {

    const DialogItem = (props) => {
        return (
            <div className={style.dialogItem}>
                <div>
                    <img className={style.userAvatar} src={props.avatar} alt=""/>
                </div>
                <div className={style.dialogItemName}>
                    <NavLink to={'/dialogs/' + props.id}
                             activeClassName={style.active}>{props.name}</NavLink>
                </div>
            </div>
        )
    }

    const Message = (props) => {
        return (
            <div className="message">{props.message}</div>
        )
    }

    const dialog = props.state.dialogData.map(name => <DialogItem name={name.name}
                                                                  id={name.id}
                                                                  avatar={name.avatar}/>)

    const messages = props.state.messagesData.map(message => <Message
        message={message.message}/>)


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialog}
            </div>
            <div className={style.messages}>
                {messages}
                <textarea onChange={onMessageChange} value={props.state.newMessageText} cols="30" rows="3"/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
}

export default Dialogs;