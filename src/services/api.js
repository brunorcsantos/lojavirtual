import axios from 'axios';

//Base URL: http://localhost:45678
//URL da lista de produtos: /produtos

const api = axios.create({
    baseURL: 'http://localhost:45678'
})


export default api;