import icon_m_01 from "./img/icon_m_01.png";
import icon_m_02 from "./img/icon_m_02.png";
import icon_m_03 from "./img/icon_m_03.png";
import icon_m_04 from "./img/icon_m_04.png";
import icon_f_01 from "./img/icon_f_01.png";
import icon_f_02 from "./img/icon_f_02.png";
import icon_f_03 from "./img/icon_f_03.png";
import icon_f_04 from "./img/icon_f_04.png";
import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        {
            id: 1,
            name: 'Dima',
            status: 'This is my status',
            location: {city: 'Dnepr', country: 'Ukraina'},
            avatar: icon_m_01,
            online: 'online',
            followed: false
        },
        {
            id: 2,
            name: 'Andrey',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_m_02,
            online: 'online',
            folowed: true
        },
        {
            id: 3,
            name: 'Oleg',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_m_03,
            online: 'online',
            folowed: true
        },
        {
            id: 4,
            name: 'Stas',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_m_04,
            online: 'online',
            folowed: true
        },
        {
            id: 5,
            name: 'Sveta',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_f_01,
            online: 'online',
            folowed: false
        },
        {
            id: 6,
            name: 'Olya',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_f_02,
            online: 'online',
            folowed: true
        },
        {
            id: 7,
            name: 'Ira',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_f_03,
            online: 'online',
            folowed: false
        },
        {
            id: 8,
            name: 'Katya',
            status: 'This is my status',
            location: {citi: 'Dnepr', country: 'Ukraina'},
            avatar: icon_f_04,
            online: 'offline',
            folowed: true
        }
    ],
    userList: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userList: state.userList.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                userList: state.userList.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS: {
            return {...state, userList: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunk = (pageSize, page) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        userAPI.getUsers(pageSize, page).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default userReducer;