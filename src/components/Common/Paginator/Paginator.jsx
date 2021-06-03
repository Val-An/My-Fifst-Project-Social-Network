import React, {useState} from 'react';
import style from './Paginator.module.css';
import cn from "classnames";

const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10, ...props}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber -1)}}>Prev</button>}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return (
                    <span className={ cn ({[style.selectedPage] : currentPage === p})}
                          key={p}
                          onClick={(e) => {
                              onPageChanged(p)
                          }}><div className={style.pages}>{p}</div></span>
                )
            })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
}

/*const Paginator = ({currentPage, onPageChanget, totalUsersCount, pageSize, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={style.usersPages}>
                {pages.map((p) => {
                    return (
                        <span className={currentPage === p && style.selectedPage}
                              onClick={() => {
                                  onPageChanget(p)
                              }}><div className={style.pages}>{p}</div></span>
                    )
                })}
            </div>
        </div>
    )
}*/

export default Paginator;