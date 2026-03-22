import axiosClient from './apiClient'


export const bookingAPI = {
    bookCar:(data:any)=>axiosClient.post("/bookings",data)
}