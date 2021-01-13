import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (<Dialogs onMessageChange={onMessageChange}
                     addMessage={addMessage}
                     dialogData={state.dialogPage.dialogData}
                     messagesData={state.dialogPage.messagesData}
                     newMessageText={state.dialogPage.newMessageText}/>)
}

export default DialogsContainer;