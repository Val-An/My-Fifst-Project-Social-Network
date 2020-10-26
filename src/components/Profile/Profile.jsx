import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img className={style.mainImg}
                     src="https://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" alt=""/>
            </div>
            <div>
                Ava + Discription
                <img className={style.logoUser}
                     src="https://spng.subpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg"
                     alt=""/>
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
            <div>
                Post 3
            </div>
            <div>
                Post 4
            </div>
        </div>
    );
}

export default Profile;