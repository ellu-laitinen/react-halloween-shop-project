import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://halloween-shop.firebaseio.com/'
})

export default instance;