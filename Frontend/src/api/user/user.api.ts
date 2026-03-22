import axiosClient from './apiClient'


export const userAPI = {
    getMe:()=>axiosClient.get('/users'),
    updateMe:(data:any)=>axiosClient.patch('/users',data)
}