import icon_m_01 from "./img/icon_m_01.png";
import icon_m_02 from "./img/icon_m_02.png";
import icon_m_03 from "./img/icon_m_03.png";
import icon_m_04 from "./img/icon_m_04.png";
import icon_f_01 from "./img/icon_f_01.png";
import icon_f_02 from "./img/icon_f_02.png";
import icon_f_03 from "./img/icon_f_03.png";
import icon_f_04 from "./img/icon_f_04.png";

const ADD_MESSAGE = 'ADD_MESSAGE';

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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newId = state.messagesData.length + 1;
            let newMessage = {
                id: newId,
                message: action.newMessageText,
                like: 0
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            };

        default:
            return state;
    }
}

export const addMessageAC = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}

export default dialogReducer;