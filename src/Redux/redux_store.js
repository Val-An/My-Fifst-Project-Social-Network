import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userList: userReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware (thunkMiddleware));

export default store;