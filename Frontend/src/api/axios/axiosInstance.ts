import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const Axios = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default Axios