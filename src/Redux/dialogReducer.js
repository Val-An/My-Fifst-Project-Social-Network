const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newId = state.messagesData.length + 1;
            let newMessage = {
                id: newId,
                message: state.newMessageText,
                like: 0
            };
            state.newMessageText = '';
            state.messagesData.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogReducer;