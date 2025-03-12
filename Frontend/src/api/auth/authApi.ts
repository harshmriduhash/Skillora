import Axios from "../axios/axiosInstance";

export const registerUser = async (userData: { name: string; email: string; password: string; role: string }) => {
    try {
        const response = await Axios.post("/api/auth/register", userData);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || "Registration failed";
    }
};

export const verifyOtp = async (email: string, otp: string, userData = {}) => {
    console.log("Sending to backend:", { email, otp, userData });
    try {
        const response = await Axios.post("/api/auth/verify-otp", { email, otp, userData });
        console.log('verifyOtp api call response in axios file: ', response)
        return response.data;
    } catch (error: any) {
        console.log("Axios Error Response:", error.response?.data); 
        throw error.response?.data || "OTP verification failed";
    }   
};

export const resendOtp = async (email: string) => {
    try {
        const response = await Axios.post("/api/auth/resend-otp", { email });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || "Resending OTP failed";
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await Axios.post("/api/auth/login", { email, password });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || "Login failed";
    }
};

export const logoutUser = async () => {
    try {
        const response = await Axios.post("/api/auth/logout")
        return response.data
    } catch (error: any) {
        throw error.response?.data || "Logout failed"
    }
};