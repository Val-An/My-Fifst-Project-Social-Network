import React from 'react';
import style from './Paginator.module.css';


const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={style.usersPages}>
                {pages.map((p) => {
                    return (
                        <span className={props.currentPage === p && style.selectedPage}
                              onClick={() => {
                                  props.onPageChanget(p)
                              }}>{p} </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Paginator;