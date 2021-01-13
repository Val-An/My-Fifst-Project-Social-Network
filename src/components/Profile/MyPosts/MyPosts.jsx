import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let posts = props.postsData.map(post => <Post message={post.message}
                                                              likesCount={post.like}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return (
        <div className={style.myPosts}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText}
                                  name="" id="" cols="30" rows="3"/>
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