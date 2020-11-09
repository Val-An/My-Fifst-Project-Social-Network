import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'Hi, how are you ?', like: 15},
    {id: 1, message: 'It\'s my first post', like: 18},
    {id: 1, message: 'BlaBlaBla', like: 24}
]

let dialogData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Olya'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yabadabadoo'},
    {id: 4, message: 'YoYoYo'}
]

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogData={dialogData}
             messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();


