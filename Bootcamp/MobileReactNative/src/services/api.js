import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:6900'
    //baseURL: 'http//192.168.0.3:6900'
});

export default api;