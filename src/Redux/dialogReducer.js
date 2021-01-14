import icon_m_01 from "./img/icon_m_01.png";
import icon_m_02 from "./img/icon_m_02.png";
import icon_m_03 from "./img/icon_m_03.png";
import icon_m_04 from "./img/icon_m_04.png";
import icon_f_01 from "./img/icon_f_01.png";
import icon_f_02 from "./img/icon_f_02.png";
import icon_f_03 from "./img/icon_f_03.png";
import icon_f_04 from "./img/icon_f_04.png";

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogData: [
        {id: 1, name: 'Dima', avatar: icon_m_01},
        {id: 2, name: 'Andrey', avatar: icon_m_02},
        {id: 3, name: 'Oleg', avatar: icon_m_03},
        {id: 4, name: 'Stas', avatar: icon_m_04},
        {id: 5, name: 'Sveta', avatar: icon_f_01},
        {id: 6, name: 'Olya', avatar: icon_f_02},
        {id: 7, name: 'Ira', avatar: icon_f_03},
        {id: 8, name: 'Katya', avatar: icon_f_04}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yabadabadoo'},
        {id: 5, message: 'YoYoYo'}
    ],
    newMessageText: 'dialogState'
}

const dialogReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case ADD_MESSAGE:
            let newId = stateCopy.messagesData.length + 1;
            let newMessage = {
                id: newId,
                message: stateCopy.newMessageText,
                like: 0
            };
            stateCopy.newMessageText = '';
            stateCopy.messagesData.push(newMessage);
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;

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