import icon_f_01 from './img/icon_f_01.png'
import icon_f_02 from './img/icon_f_02.png'
import icon_f_03 from './img/icon_f_03.png'
import icon_f_04 from './img/icon_f_04.png'
import icon_m_01 from './img/icon_m_01.png'
import icon_m_02 from './img/icon_m_02.png'
import icon_m_03 from './img/icon_m_03.png'
import icon_m_04 from './img/icon_m_04.png'

let state = {
    userList: [
        {id: 1, name: 'Dima', avatar: 'icon_m_01'},
        {id: 2, name: 'Andrey', avatar: 'icon_m_02'},
        {id: 3, name: 'Oleg', avatar: 'icon_m_03'},
        {id: 4, name: 'Stas', avatar: 'icon_m_04'},
        {id: 5, name: 'Sveta', avatar: 'icon_f_01'},
        {id: 6, name: 'Olya', avatar: 'icon_f_02'},
        {id: 7, name: 'Ira', avatar: 'icon_f_03'},
        {id: 8, name: 'Katya', avatar: 'icon_f_04'}
    ],

    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you ?', like: 15},
            {id: 1, message: 'It\'s my first post', like: 18},
            {id: 1, message: 'BlaBlaBla', like: 24}
        ],
    },

    dialogPage: {
        dialogData: [
            {id: 1, name: 'Dima', avatar: 'icon_m_01'},
            {id: 2, name: 'Andrey', avatar: 'icon_m_02'},
            {id: 3, name: 'Oleg', avatar: 'icon_m_03'},
            {id: 4, name: 'Stas', avatar: 'icon_m_04'},
            {id: 5, name: 'Sveta', avatar: 'icon_f_01'},
            {id: 6, name: 'Olya', avatar: 'icon_f_02'},
            {id: 7, name: 'Ira', avatar: 'icon_f_03'},
            {id: 8, name: 'Katya', avatar: 'icon_f_04'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yabadabadoo'},
            {id: 4, message: 'YoYoYo'}
        ]
    }
}

export default state;