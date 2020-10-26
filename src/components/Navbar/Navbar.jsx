import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <nav >
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
        </div>
    );
}

export default Navbar;