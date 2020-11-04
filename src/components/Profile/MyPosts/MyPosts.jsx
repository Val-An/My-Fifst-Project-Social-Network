import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    return (
        <div className={style.myPosts}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div><button>Add Post</button></div>
                </div>
            </div>
            {props.postsDataMap}
        </div>
    );
}

export default MyPosts;