import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

let postsData = [
    {id:1, message:'Hi, how are you ?', like:15},
    {id:1, message:'It\'s my first post', like:18}
]

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
            <Post message={postsData[0].message} likesCount={postsData[0].like} />
            <Post message={postsData[1].message} likesCount={postsData[1].like} />
        </div>
    );
}

export default MyPosts;