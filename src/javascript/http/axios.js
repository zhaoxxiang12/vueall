import axios from "axios";

let newAxios = axios.create({
    baseURL: 'http://localhost:3131',
    timeout: 3000
});

export default newAxios;