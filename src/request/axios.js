import axios from "axios";

let request = axios.create({
    baseURL: "http://localhost:3004",
    timeout: 5000,
})


request.interceptors.request.use((config) => {
    return config
}, error => {
    Promise.reject(error)
})


request.interceptors.response.use((res) => {
    return res
}, error => {
    Promise.reject(error)
})

export default request