import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./components/Profile/MyPosts/Post/Post";
import {NavLink} from "react-router-dom";
import style from "./components/Dialogs/Dialogs.module.css";

let postsData = [
    {id:1, message:'Hi, how are you ?', like:15},
    {id:1, message:'It\'s my first post', like:18},
    {id:1, message:'BlaBlaBla', like:24}
]

let postsDataMap = postsData.map ( post => <Post message={post.message} likesCount={post.like} /> )

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

let dialogData = [
    {id:1, name:'Dima'},
    {id:2, name:'Andrey'},
    {id:3, name:'Oleg'},
    {id:4, name:'Sveta'},
    {id:5, name:'Olya'}
]

let dialogDataMap = dialogData.map ( name => <DialogItem name={name.name} id={name.id}/> )

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}



let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you'},
    {id:3, message:'Yo'},
    {id:4, message:'Yabadabadoo'},
    {id:4, message:'YoYoYo'}
]

let messagesDataMap = messagesData.map ( message =>  <Message message={message.message}/>)


ReactDOM.render(
  <React.StrictMode>
    <App postsDataMap={postsDataMap} dialogDataMap={dialogDataMap} messagesDataMap={messagesDataMap}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


