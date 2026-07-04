import axios from 'axios';

// 1. Grab the live backend URL from Render environment variables
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const API_BASE_URL = "https://mernzomato-1.onrender.com"; 
// Note: If using Create React App instead of Vite, use: process.env.REACT_APP_API_URL

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // REQUIRED: This sends cookies back and forth to the server
});

export default api;