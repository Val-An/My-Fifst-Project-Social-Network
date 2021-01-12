import icon_f_01 from './img/icon_f_01.png'
import icon_f_02 from './img/icon_f_02.png'
import icon_f_03 from './img/icon_f_03.png'
import icon_f_04 from './img/icon_f_04.png'
import icon_m_01 from './img/icon_m_01.png'
import icon_m_02 from './img/icon_m_02.png'
import icon_m_03 from './img/icon_m_03.png'
import icon_m_04 from './img/icon_m_04.png'


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let store = {
    _state: {
        userList: [
            {id: 1, name: 'Dima', avatar: icon_m_01, status: 'online'},
            {id: 2, name: 'Andrey', avatar: icon_m_02, status: 'online'},
            {id: 3, name: 'Oleg', avatar: icon_m_03, status: 'online'},
            {id: 4, name: 'Stas', avatar: icon_m_04, status: 'online'},
            {id: 5, name: 'Sveta', avatar: icon_f_01, status: 'online'},
            {id: 6, name: 'Olya', avatar: icon_f_02, status: 'online'},
            {id: 7, name: 'Ira', avatar: icon_f_03, status: 'online'},
            {id: 8, name: 'Katya', avatar: icon_f_04, status: 'offline'}
        ],

        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you ?', like: 15},
                {id: 2, message: 'It\'s my first post', like: 18},
                {id: 3, message: 'BlaBlaBla', like: 24}
            ],
            newPostText: 'profileState'
        },

        dialogPage: {
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
    },
    _callSubsriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubsriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newId = this._state.profilePage.postsData.length + 1;
            let newPost = {
                id: newId,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubsriber(store._state);
            this._state.profilePage.newPostText = '';
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsriber(store._state);
        }
        if (action.type === ADD_MESSAGE) {
            let newId = this._state.dialogPage.messagesData.length + 1;
            let newMessage = {
                id: newId,
                message: this._state.dialogPage.newMessageText,
                like: 0
            };
            this._state.dialogPage.newMessageText = '';
            this._state.dialogPage.messagesData.push(newMessage);
            this._callSubsriber(store._state);
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubsriber(store._state);
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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


export default store;
window.store = store;