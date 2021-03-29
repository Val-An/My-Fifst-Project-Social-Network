import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you ?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 18},
        {id: 3, message: 'BlaBlaBla', like: 24}
    ],
    newPostText: 'profileState',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let newId = state.postsData.length + 1;
            let newPost = {
                id: newId,
                message: state.newPostText,
                like: 0
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST})
export const onPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}


export default profileReducer;