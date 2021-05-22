import * as axios from "axios";

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f2505eb7-09e9-4414-946c-a8ac246dd9fb'
    }
})

export const userAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then (response => response.data)
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI object.");
        return profileAPI.getProfile(userId);
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
            .then (response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then (response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then (response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then (response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
            .then (response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then (response => response.data);
    },
    login(email, password, rememberMe = false) {
       return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}




