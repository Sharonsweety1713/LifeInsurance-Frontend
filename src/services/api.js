import axios from 'axios';

// const baseURL = 'http://65.1.244.186:7777/api';
const baseURL = 'http://localhost:8080';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const UserData = (email) => axiosInstance.get(`/customers/email/${email}`);
const fetchPolicies = () => axiosInstance.get('/customer-policies/all');
const fetchClaims=()=>axiosInstance.get('/claims');
export { axiosInstance,UserData,fetchPolicies,fetchClaims}