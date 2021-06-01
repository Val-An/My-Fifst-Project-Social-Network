import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you ?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 18},
        {id: 3, message: 'BlaBlaBla', like: 24}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let newId = state.postsData.length + 1;
            let newPost = {
                id: newId,
                message: action.newPostText,
                like: 0
            };
            return {...state, postsData: [...state.postsData, newPost]};


        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_USER_STATUS:
            return {...state, status: action.status}

        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}

        default:
            return state;
    }

}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfileThunk = (userId) => async (dispatch) => {
    const response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}

export const getUserStatusThunk = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response));
}

export const updateStatusThunk = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}


export default profileReducer;