import React from 'react';
import style from './Users.module.css';
import Paginator from "../Common/Paginator/Paginator";
// import PageNav from "../Common/Paginator/PageNavigator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, userList, portionSize, ...props}) => {
    // const pageNav = <PageNav currentPage={currentPage} onPageChanged={onPageChanged}/>
    const paginator = <Paginator currentPage={currentPage}
                                 onPageChanged={onPageChanged}
                                 totalItemsCount={totalItemsCount}
                                 pageSize={pageSize}
                                 portionSize={portionSize}/>
    return (
        <div>
            <div>
                {/*{pageNav}*/}
            </div>
            {paginator}
            <div className={style.users}>
                {
                    userList.map(user => <User followThunk={props.followThunk}
                                               unfollowThunk={props.unfollowThunk}
                                               followingInProgress={props.followingInProgress}
                                               user={user}
                                               key={user.id}/>)
                }
            </div>
            <div>
                {/*{pageNav}*/}
            </div>
            {paginator}
        </div>

    )
}

export default Users;