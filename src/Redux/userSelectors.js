export const getUsers = (state) => {
    return state.userList.userList;
}

export const getPageSize = (state) => {
    return state.userList.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.userList.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.userList.currentPage;
}

export const getIsFetching = (state) => {
    return state.userList.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.userList.followingInProgress;
}