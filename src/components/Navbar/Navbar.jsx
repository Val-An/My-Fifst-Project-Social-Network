import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsOnlineContainer from "./FriendsOnlineContainer";

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <nav>
                <div>
                    <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/friends" activeClassName={style.active}>Friends</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={style.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
                </div>
                <FriendsOnlineContainer />
            </nav>
        </div>
    );
}

export default Navbar;