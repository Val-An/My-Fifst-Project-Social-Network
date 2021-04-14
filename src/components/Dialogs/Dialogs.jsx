import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={style.messages}>

        <Field component={"textarea"}
               name={"newMessageText"} placeholder={"Enter your message"}/>
        <button >Add Message</button>
    </form>
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

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

    const dialog = props.dialogPage.dialogData.map(name => <DialogItem name={name.name}
                                                                       id={name.id}
                                                                       key={name.id}
                                                                       avatar={name.avatar}/>)

    const messages = props.dialogPage.messagesData.map(message => <Message id={message.id}
                                                                           key={message.id}
                                                                           message={message.message}/>)


    let addMessage = (value) => {
        props.addMessage(value.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialog}
            </div>
            <div>
                {messages}
                <AddMessageReduxForm onSubmit={addMessage} />
            </div>

        </div>
    );
}

export default Dialogs;