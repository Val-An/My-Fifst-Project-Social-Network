import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userList: userReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware (thunkMiddleware));

export default store;