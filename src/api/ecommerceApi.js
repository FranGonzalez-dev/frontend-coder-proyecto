import axios from "axios";

const API_URL = 'http://localhost:8080/api'

const ecommerceApi = axios.create({
    baseURL: API_URL
})

ecommerceApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token') // Configurar dentro del backend para que se guarde en el localStorage
    }
    return config;
})

export default ecommerceApi;