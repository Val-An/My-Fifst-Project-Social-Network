import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../Redux/state";


const MyPosts = (props) => {

    let posts = props.profilePage.postsData.map(post => <Post message={post.message}
                                                        likesCount={post.like}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD_POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE_NEW_POST_TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={style.myPosts}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} name="" id="" cols="30" rows="3" />
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;