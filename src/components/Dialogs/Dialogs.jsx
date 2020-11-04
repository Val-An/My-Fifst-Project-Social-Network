import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

let dialogData = [
    {id:1, name:'Dima'},
    {id:2, name:'Andrey'},
    {id:3, name:'Oleg'},
    {id:4, name:'Sveta'},
    {id:5, name:'Olya'}
]

let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you'},
    {id:3, message:'Yo'},
    {id:4, message:'Yabadabadoo'}
]

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    );
}

export default Dialogs;