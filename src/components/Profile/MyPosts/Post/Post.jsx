import React from 'react';
import style from './Post.module.css';
import user_logo from './user-logo.png';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img className={style.user_logo} src={user_logo} alt=""/>
            {props.message}
            <div className={style.like}>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;