import axios from 'axios';
const instance = axios.create({
    baseURL:'https://tinder-backendappl.herokuapp.com',
})
export default instance;