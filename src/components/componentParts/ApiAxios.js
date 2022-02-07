import axios from "axios";

const api = axios.create({
    baseURL: 'https://seungyun-shin.com/',
    // baseURL: 'http://3.36.56.102/',
    // baseURL: 'http://127.0.0.1:8006/',
});

export default api;