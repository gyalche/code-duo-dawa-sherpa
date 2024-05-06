import axios from "axios";

const API = axios.create({
    baseURL: `https://www.dnd5eapi.co/api/`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default API;