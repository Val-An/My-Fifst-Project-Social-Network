import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


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

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD_MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = {type: 'UPDATE_NEW_MESSAGE_TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialog}
            </div>
            <div className={style.messages}>
                {messages}
                <textarea ref={newMessageElement} onChange={onMessageChange} name="" id="" cols="30" rows="3"/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
}

export default Dialogs;