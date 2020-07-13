import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-45ff5.firebaseio.com/'
})

export default instance;