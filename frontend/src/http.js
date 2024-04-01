import axios from 'axios';
export default axios.create({
    baseURL: "http://localhost/laravel10_RCrud/backend/public/api",
    headers:{
        "Content-Type": "application/json"
    }
})