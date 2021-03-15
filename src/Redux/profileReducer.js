import {profile} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you ?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 18},
        {id: 3, message: 'BlaBlaBla', like: 24}
    ],
    newPostText: 'profileState',
    profile: null
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

        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST})
export const onPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const profileThunk = (userId) => {
    return (dispatch) => {
        profile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;