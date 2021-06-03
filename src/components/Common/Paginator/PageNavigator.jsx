import React from 'react';
import style from './PageNavigator.module.css';


const PageNav = ({onPageChanget, currentPage}) => {
    return (
        <div className={style.pageNav}>
            <button onClick={() => {
                onPageChanget(currentPage - 1)
            }}>Prev
            </button>
            {currentPage}
            <button onClick={() => {
                onPageChanget(currentPage + 1)
            }}>Next
            </button>
        </div>
    )
}

export default PageNav;