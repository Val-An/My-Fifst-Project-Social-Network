import React from 'react';
import style from './PageNavigator.module.css';


const PageNav = (props) => {
    return (
        <div className={style.pageNav}>
            <button onClick={() => {
                props.onPageChanget(props.currentPage - 1)
            }}>Prev
            </button>
            {props.currentPage}
            <button onClick={() => {
                props.onPageChanget(props.currentPage + 1)
            }}>Next
            </button>
        </div>
    )
}

export default PageNav;