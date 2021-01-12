import icon_m_01 from "./img/icon_m_01.png";
import icon_m_02 from "./img/icon_m_02.png";
import icon_m_03 from "./img/icon_m_03.png";
import icon_m_04 from "./img/icon_m_04.png";
import icon_f_01 from "./img/icon_f_01.png";
import icon_f_02 from "./img/icon_f_02.png";
import icon_f_03 from "./img/icon_f_03.png";
import icon_f_04 from "./img/icon_f_04.png";

let initialState = {
    userList: [
        {id: 1, name: 'Dima', avatar: icon_m_01, status: 'online'},
        {id: 2, name: 'Andrey', avatar: icon_m_02, status: 'online'},
        {id: 3, name: 'Oleg', avatar: icon_m_03, status: 'online'},
        {id: 4, name: 'Stas', avatar: icon_m_04, status: 'online'},
        {id: 5, name: 'Sveta', avatar: icon_f_01, status: 'online'},
        {id: 6, name: 'Olya', avatar: icon_f_02, status: 'online'},
        {id: 7, name: 'Ira', avatar: icon_f_03, status: 'online'},
        {id: 8, name: 'Katya', avatar: icon_f_04, status: 'offline'}
    ]
}

const userReducer = (state = initialState, action) => {

    return state;
}

export default userReducer;