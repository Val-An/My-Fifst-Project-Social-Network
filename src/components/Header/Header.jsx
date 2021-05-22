import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <header className={style.header}>
                <div className={style.headerLogo}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9B%D0%BE%D0%B1%D0%BE%D1%81_%D0%A3%D0%9F%D0%9D%D0%A4%D0%9C_%28%D0%BB%D0%BE%D0%B3%D0%BE%29.png"
                        alt=""/>
                </div>
                <div className={style.headerName}>
                    My Social Network
                </div>
                <div className={style.loginBlock}>
                    {props.isAuth
                        ? <div className={style.loginLogout}><div>{props.login}</div><div><button onClick={props.logout}>Log out</button></div></div>
                        : <div className={style.login}><NavLink to={'/login'}>Login</NavLink></div> }
                </div>
            </header>
        </div>
    );
}

export default Header;