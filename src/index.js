import React from 'react';
import './index.css';
import store from './Redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();


