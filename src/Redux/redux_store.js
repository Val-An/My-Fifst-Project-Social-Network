import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userList: userReducer
});

let store = createStore(reducers);

export default store;