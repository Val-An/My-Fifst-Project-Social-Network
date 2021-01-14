const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you ?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 18},
        {id: 3, message: 'BlaBlaBla', like: 24}
    ],
    newPostText: 'profileState'
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            let newId = stateCopy.postsData.length + 1;
            let newPost = {
                id: newId,
                message: stateCopy.newPostText,
                like: 0
            };
            stateCopy.postsData = {...state.postsData};
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;

        default:
            return state;
    }

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

export default profileReducer;