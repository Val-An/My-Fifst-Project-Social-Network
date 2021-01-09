import icon_f_01 from './img/icon_f_01.png'
import icon_f_02 from './img/icon_f_02.png'
import icon_f_03 from './img/icon_f_03.png'
import icon_f_04 from './img/icon_f_04.png'
import icon_m_01 from './img/icon_m_01.png'
import icon_m_02 from './img/icon_m_02.png'
import icon_m_03 from './img/icon_m_03.png'
import icon_m_04 from './img/icon_m_04.png'


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
            newPostText: ''
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
            newMessageText: ''
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

    addPost() {
        let newId = this._state.profilePage.postsData.length + 1;
        let newPost = {
            id: newId,
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._callSubsriber(store._state);
        this._state.profilePage.newPostText = '';
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubsriber(store._state);
    },
    addMessage() {
        let newId = this._state.dialogPage.messagesData.length + 1;
        let newMessage = {
            id: newId,
            message: this._state.dialogPage.newMessageText,
            like: 0
        };
        this._state.dialogPage.messagesData.push(newMessage);
        this._callSubsriber(store._state);
        this._state.dialogPage.newMessageText = '';
    },
    updateNewMessageText(newText) {
        this._state.dialogPage.newMessageText = newText;
        this._callSubsriber(store._state);
    },

}



export default store;
window.store = store;