import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8478ff19-7109-44a4-8af6-535984f1a07e"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    setFollow(u) {
        return instance.post(`follow/${u.id}`)
            .then(response => {
                return response.data;
            })
    },
    setUnFollow(u) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data;
            })
    }

}
